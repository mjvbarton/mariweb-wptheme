<?php

function aggregate_theme_api_setup(){
    add_action( 'rest_api_init', function () {
        register_rest_route( 'mariweb-wptheme/v1', '/all', array(
            'methods' => 'GET',
            'callback' => 'aggregate_theme_api',
        ));
    });
}

function aggregate_theme_api(){
    return array(
        'socialSites' => social_sites(),
        'frontpage' => front_page_get_welcome_ids(), 
        'footer' => customize_footer_get_footer(),
    );
}

aggregate_theme_api_setup();