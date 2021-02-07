<?php

function backgrounds_setup(){
    add_action('customize_register', 'backgrounds_customizer');
    backgrounds_rest_api();
    taxonomyBackground_rest_field();
}

function backgrounds_rest_api(){
    add_action( 'rest_api_init', function () {
        register_rest_route( 'mariweb-wptheme/v1', '/backgrounds', array(
            'methods' => 'GET',
            'callback' => 'backgrounds',
        ));
    });
}

function backgrounds(){
    $background = get_option('backgrounds-default', null);
    return array(
        'default' => $background ? wp_get_attachment_url($background) : 'https://i.pinimg.com/originals/b5/60/ca/b560ca9bd65061bda698321a17d22f34.jpg',
    );
}

function taxonomyBackground_rest_field(){
    register_rest_field( 'category', 'taxonomy_background', array(
        'get_callback' => function($category){            
            return get_field('taxonomy_background', 'category_' . $category['id']);
        },
    ));

    register_rest_field( 'tag', 'taxonomy_background', array(
        'get_callback' => function($post){            
            var_dump($post);
            return get_field('taxonomy_background', 'tag' . $category['id']);
        },
    ));
}

function backgrounds_customizer(WP_Customize_Manager $wpc){
    $wpc->add_section('backgrounds-section', array(
        'title' => 'Obrázek na pozadí',
        'description' => 'Zde proveďte nastavení hlavního obrázku na pozadí. Chcete-li změnit pozadí stránky, nastavte náhledový obrázek stránky. Chcete-li změnit obrázek rubriky nebo štítku upravte rubriku či štítek.', 
        'priority' => 220,       
    ));

    $wpc->add_setting('backgrounds-default', array(
        'type' => 'option'
    ));

    $wpc->add_control(new WP_Customize_Media_Control($wpc, 'backgrounds-default-control', array(        
        'label' => 'Pozadí hlavní stránky',
        'description' => 'Bude použito, pokud nebude žádný obrázek k dispozici.',            
        'section' => 'backgrounds-section',
        'settings' => 'backgrounds-default',                 
    )));
}

backgrounds_setup();