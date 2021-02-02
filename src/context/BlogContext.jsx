import React from 'react';

export const BlogInfo = {   
    apiBaseUrl: 'https://wordpress.localhost/wp-json',
    meta: {
        name: null,
        description: null,
        url: null,
        home: null,
        gmt_offset: null,
        timezone_string: null,
    },
    primaryMenu: [],   
    socialSites:{
        facebook: {
            name: null,
            prefix: null,
            profile: null,
        },
        instagram: {
            name: null,
            prefix: null,
            profile: null,
        },
        pinterest: {
            name: null,
            prefix: null,
            profile: null,
        },
        youtube: {
            name: null,
            prefix: null,
            profile: null,
        },
        soundcloud: {
            name: null,
            prefix: null,
            profile: null,
        },
        twitter: {
            name: null,
            prefix: null,
            profile: null,
        }, 
        github: {
            name: null,
            prefix: null,
            profile: null,
        }, 
        email: {
            name: null,
            prefix: null,
            profile: null,
        },
    },     
};

export const BlogContext = React.createContext(BlogInfo);
