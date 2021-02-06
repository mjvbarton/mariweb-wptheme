<?php
/**
 * Extends rest api with social sites
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package mjvbarton
 * @subpackage mariweb-wptheme
 * @since Mari's blog Wordpress Theme 1.0
 */
 function social_sites_setup(){
    add_action( 'customize_register', 'social_sites_customizer' );
    social_sites_rest_api();
 } 

 function social_sites() : array{
     return array(
        'facebook' => array(            
            'name' => 'Facebook', 
            'prefix' => 'https://facebook.com/', 
            'profile' => get_option('mariweb-si-facebook', null),            
        ),
        'instagram' => array(            
            'name' => 'Instagram', 
            'prefix' => 'https://instagram.com/',
            'profile' => get_option('mariweb-si-instagram', null),            
        ),
        'pinterest' => array(
            'name' => 'Pinterest', 
            'prefix' => 'https://pinterest.com/',
            'profile' => get_option('mariweb-si-pinterest', null),            
        ),
        'youtube' => array(
            'name' => 'YouTube', 
            'prefix' => 'https://youtube.com/channel/',            
            'profile' => get_option('mariweb-si-youtube', null),   
        ),
        'soundcloud' => array(
            'name' => 'SoundCloud', 
            'prefix' => 'https://soundcloud.com/',
            'profile' => get_option('mariweb-si-soundcloud', null),   
        ),
        'twitter' => array(
            'name' => 'Twitter', 
            'prefix' => 'https://twitter.com/',
            'profile' => get_option('mariweb-si-twitter', null),   
        ),
        'github' => array(
            'name' => 'GitHub', 
            'prefix' => 'https://www.github.com/',
            'profile' => get_option('mariweb-si-github', null),   
        ),
        'email' => array(
            'name' => 'Email',
            'prefix' => 'mailto:',
            'profile' => get_option('mariweb-si-mailto', null)
        ),        
     );
 }

 function social_sites_rest_api(){
    add_action( 'rest_api_init', function () {
        register_rest_route( 'mariweb-wptheme/v1', '/socialSites', array(
            'methods' => 'GET',
            'callback' => 'social_sites',
        ));
    });
}

function social_sites_customizer(WP_Customize_Manager $wpc){    
    $wpc->add_section('mariweb-si-section', array(
        'title' => __('Sociální sítě', 'mariweb-wptheme'),                
        'description' => 'Zadejte názvy profilů na vybraných sociálních sítích. Ikona sítě se nezobrazí pokud nevyplníte příslušné pole.'
    ));

    foreach(social_sites() as $key => $value){
        $wpc->add_setting('mariweb-si-'. $key, array(
            'default' => '',
            'type' => 'option'
        ));
    
        $wpc->add_control('mariweb-si-'. $key .'-control', array(
            'label' => __($value['name'], 'mariweb-wptheme'),
            'description' => $value['prefix'],
            'type' => 'text',
            'settings' => 'mariweb-si-'. $key,
            'section' => 'mariweb-si-section',
            'input_attrs' => array(
                'placeholder' => __('nepoužito', 'mariweb-wptheme')
            )
        ));
    }
   

    // foreach(social_sites() as $key => $value){
    //     $wpc->add_setting("mariweb-wptheme_socialsites_$key", array(
    //         'type' => 'option',
    //         'default' => null,
    //     ));

    //     $wpc->add_control("mariweb-wptheme_socialsites_{$key}_control", array(
    //         'section' => 'mariweb-wptheme_socialsites',
    //         'setting' => "mariweb-wptheme_socialsites_$key",
    //         'label' => $value['name'],
    //         'description' => 'Napište adresu profilu za ' . $value['name'],
    //         'type' => 'text',
    //     ));
    // }
}


social_sites_setup();