<?php

function customize_footer_setup(){
    add_action('customize_register', 'customize_footer_customizer');
    customize_footer_rest_api();
}

function customize_footer_rest_api(){
    add_action( 'rest_api_init', function () {
        register_rest_route( 'mariweb-wptheme/v1', '/footer', array(
            'methods' => 'GET',
            'callback' => 'customize_footer_get_footer',
        ));
    });
}

function customize_footer_get_footer(){
    return array(
        'patreon' => array(
            'show' => get_option('patreon-show', false),
            'title' => get_option('patreon-title', null),
            'description' => get_option('patreon-description', null),
            'url' => get_option('patreon-url'),
        ),
        'meta' => array(
            'copyright' => get_option('meta-copyright', null)
        )
    );
}

function customize_footer_customizer(WP_Customize_Manager $wpc){
    $wpc->add_panel('customize-footer-panel', array(
        'title' => 'Patička',
        'description' => 'Nastavení patičky blogu.',
        'priority' => 300,
    ));

     // Show checkbox
     $wpc->add_setting('customize-footer-display-socialsites', array(
        'default' => false,
        'type' => 'option'        
    ));

    $wpc->add_control('customize-footer-display-socialsites-control', array(
        'label' => 'Zobrazit Patreon',
        'priority' => 0,
        'type' => 'checkbox',
        'settings' => 'customize-footer-display-socialsites',
        'panel' => 'customize-footer-panel'
    ));  

    customize_footer_patreon($wpc);
    customize_footer_meta($wpc);   
}

function customize_footer_patreon(WP_Customize_Manager $wpc){
    $wpc->add_section('patreon-section', array(
        'title' => 'Patreon',
        'description' => 'Nastavení integrace Patreonu.',        
        'panel' => 'customize-footer-panel'
    ));

    // Show checkbox
    $wpc->add_setting('patreon-show', array(
        'default' => false,
        'type' => 'option'        
    ));

    $wpc->add_control('patreon-show-control', array(
        'label' => 'Zobrazit Patreon',
        'priority' => 0,
        'type' => 'checkbox',
        'settings' => 'patreon-show',
        'section' => 'patreon-section'
    ));  


    $wpc->add_setting('patreon-title', array(
        'type' => 'option',
        'default' => null,
    ));

    $wpc->add_control('patreon-title-control', array(
        'label' => 'Nadpis výzvy',
        'description' => 'Nadpis výzvy k podpoření.',
        'type' => 'text',
        'section' => 'patreon-section',
        'settings' => 'patreon-title',
    ));    

    $wpc->add_setting('patreon-description', array(
        'type' => 'option',
        'default' => null,
    ));

    $wpc->add_control('patreon-description-control', array(
        'label' => 'Text výzvy',
        'description' => 'Text výzvy k podpoření.',
        'type' => 'textarea',
        'section' => 'patreon-section',
        'settings' => 'patreon-description',
    ));   
    
    $wpc->add_setting('patreon-url', array(
        'type' => 'option',
        'default' => null,
    ));

    $wpc->add_control('patreon-url-control', array(
        'label' => 'URL odkazu',
        'description' => 'Adresa odkazu na Pateron',
        'type' => 'url',
        'section' => 'patreon-section',
        'settings' => 'patreon-url',
    )); 
}

function customize_footer_meta(WP_Customize_Manager $wpc){
    $wpc->add_section('meta-section', array(
        'title' => 'Informace v patičce',
        'description' => 'Nastavení zobrazených informací v patičce.',        
        'panel' => 'customize-footer-panel'
    ));

    $wpc->add_setting('meta-copyright', array(
        'type' => 'option',
        'default' => null,
    ));

    $wpc->add_control('meta-copyright-control', array(
        'label' => 'Copyright',
        'description' => 'Text, který bude napsán za symbol ©',
        'type' => 'text',
        'section' => 'meta-section',
        'settings' => 'meta-copyright',
    ));    
    
}

customize_footer_setup();