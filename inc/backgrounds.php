<?php

function backgrounds_setup(){
    add_action('customize_register', 'backgrounds_customizer');
}

function backgrounds_rest_api(){

}

function backgrounds_customizer(WP_Customize_Manager $wpc){
    $wpc->add_section('backgrounds-section', array(
        'title' => 'Obrázek na pozadí',
        'description' => 'Zde proveďte nastavení hlavního obrázku na pozadí. Chcete-li změnit pozadí stránky, nastavte náhledový obrázek stránky. Chcete-li změnit obrázek rubriky nebo štítku upravte rubriku či štítek.', 
        'priority' => 220,       
    ));

    $wpc->add_setting('backgrounds-main', array(
        'type' => 'option'
    ));

    $wpc->add_control(new WP_Customize_Media_Control($wpc, 'backgrounds-main-control', array(        
        'label' => 'Pozadí hlavní stránky',
        'description' => 'Bude použito, pokud nebude žádný obrázek k dispozici.',            
        'section' => 'backgrounds-section',
        'settings' => 'backgrounds-main',                 
    )));
}

backgrounds_setup();