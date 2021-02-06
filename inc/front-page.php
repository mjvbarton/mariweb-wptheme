<?php

/**
 * Sets up front page for the customizer
 *
 * @package mjvbarton
 * @subpackage mariweb-wptheme
 * @since Mari's blog Wordpress Theme 1.0
 */
function front_page_setup(){    
    add_action( 'customize_register', 'front_page_customizer' );
    front_page_rest_api();
}

function front_page_get_welcome_ids(){
    $welcome = get_option( 'frontpage-welcome', null);
    return array(
        'welcome' => $welcome ? intval($welcome) : null,
    );
}

function front_page_rest_api(){
    add_action( 'rest_api_init', function () {
        register_rest_route( 'mariweb-wptheme/v1', '/frontpage', array(
            'methods' => 'GET',
            'callback' => 'front_page_get_welcome_ids',
        ));
    });
}

function front_page_customizer(WP_Customize_Manager $wpc){
    $wpc->add_section('frontpage-section', array(
        'title' => 'Úvodní stránka',
        'description' => 'Umožňuje nastavit statický obsah částí hlavní stránky.', 
        'priority' => 200,       
    ));

    $wpc->add_setting('frontpage-welcome', array(
        'type' => 'option'
    ));

    $wpc->add_control('frontpage-welcome-control', array(
        'label' => 'Uvítací text',
        'description' => 'Prosím, vyberte stránku ze seznamu.',
        'type' => 'dropdown-pages',
        'section' => 'frontpage-section',
        'settings' => 'frontpage-welcome',
    ));    
}

front_page_setup();