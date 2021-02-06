import { faFacebook, faGithub, faInstagram, faPinterest, faSoundcloud, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { BlogContext } from '../../context/BlogContext';
import Nav from './Nav';
import SocialLink from './SocialLink';

/**
 * Renders social icons available to blog.
 * @author mjvbarton
 * @since 1.0.0
 */
class SocialSites extends React.Component{
    render(){
        return(
            <BlogContext.Consumer>
                {blogInfo => 
                    <Nav title='Sociální sítě' className={this.props.className} titleClass={this.props.titleClass} ulClass={this.props.ulClass} liClass={this.props.liClass}>
                        {blogInfo.socialSites.facebook.profile &&
                            <SocialLink 
                                icon={faFacebook} 
                                siteName='Facebook' 
                                url={encodeURI(`${blogInfo.socialSites.facebook.prefix}${blogInfo.socialSites.facebook.profile}`)}
                            />
                        }
                        {blogInfo.socialSites.instagram.profile &&
                            <SocialLink 
                                icon={faInstagram} 
                                siteName='Instagram' 
                                url={encodeURI(`${blogInfo.socialSites.instagram.prefix}${blogInfo.socialSites.instagram.profile}`)}
                            />
                        }
                        {blogInfo.socialSites.pinterest.profile &&
                            <SocialLink 
                                icon={faPinterest} 
                                siteName='Pinterest' 
                                url={encodeURI(`${blogInfo.socialSites.pinterest.prefix}${blogInfo.socialSites.pinterest.profile}`)}
                            />
                        }
                        {blogInfo.socialSites.youtube.profile &&
                            <SocialLink 
                                icon={faYoutube} 
                                siteName='YouTube' 
                                url={encodeURI(`${blogInfo.socialSites.youtube.prefix}${blogInfo.socialSites.youtube.profile}`)}
                            />
                        }
                        {blogInfo.socialSites.soundcloud.profile &&
                            <SocialLink 
                                icon={faSoundcloud} 
                                siteName='SoundCloud' 
                                url={encodeURI(`${blogInfo.socialSites.soundcloud.prefix}${blogInfo.socialSites.soundcloud.profile}`)}
                            />
                        }
                        {blogInfo.socialSites.twitter.profile &&
                            <SocialLink 
                                icon={faTwitter} 
                                siteName='Twitter' 
                                url={encodeURI(`${blogInfo.socialSites.twitter.prefix}${blogInfo.socialSites.twitter.profile}`)}
                            />
                        }
                        {blogInfo.socialSites.github.profile &&
                            <SocialLink 
                                icon={faGithub} 
                                siteName='GitHub' 
                                url={encodeURI(`${blogInfo.socialSites.github.prefix}${blogInfo.socialSites.github.profile}`)}
                            />
                        }
                        {blogInfo.socialSites.email.profile &&
                            <SocialLink 
                                icon={faAt} 
                                siteName='Napsat email' 
                                url={encodeURI(`${blogInfo.socialSites.email.prefix}${blogInfo.socialSites.email.profile}`)}
                            />
                        }
                    </Nav>
                }
            </BlogContext.Consumer>            
        );
    }
}

export default SocialSites;