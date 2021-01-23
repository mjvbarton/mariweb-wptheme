import { faFacebook, faGithub, faInstagram, faPinterest, faSoundcloud, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Nav from './Nav';
import SocialLink from './SocialLink';

class SocialSites extends React.Component{
    render(){
        return(
            <Nav title="Sociální sítě" className={this.props.className} titleClass={this.props.titleClass} ulClass={this.props.ulClass} liClass={this.props.liClass}>
                {this.props.facebook &&
                    <SocialLink 
                        icon={faFacebook} 
                        siteName="Facebook" 
                        url={encodeURI(`https://facebook.com/${this.props.facebook}`)}
                    />
                }
                {this.props.instagram &&
                    <SocialLink 
                        icon={faInstagram} 
                        siteName="Instagram" 
                        url={encodeURI(`https://instagram.com/${this.props.instagram}`)}
                    />
                }
                {this.props.pinterest &&
                    <SocialLink 
                        icon={faPinterest} 
                        siteName="Pinterest" 
                        url={encodeURI(`https://pinterest.com/${this.props.pinterest}`)}
                    />
                }
                {this.props.youtube &&
                    <SocialLink 
                        icon={faYoutube} 
                        siteName="YouTube" 
                        url={encodeURI(`https://www.youtube.com/channel/${this.props.youtube}`)}
                    />
                }
                {this.props.soundcloud &&
                    <SocialLink 
                        icon={faSoundcloud} 
                        siteName="SoundCloud" 
                        url={encodeURI(`https://soundcloud.com/${this.props.soundcloud}`)}
                    />
                }
                {this.props.twitter &&
                    <SocialLink 
                        icon={faTwitter} 
                        siteName="Twitter" 
                        url={encodeURI(`https://twitter.com/${this.props.twitter}`)}
                    />
                }
                {this.props.github &&
                    <SocialLink 
                        icon={faGithub} 
                        siteName="GitHub" 
                        url={encodeURI(`https://www.github.com/${this.props.github}`)}
                    />
                }
                {this.props.email &&
                    <SocialLink 
                        icon={faAt} 
                        siteName="Napsat email" 
                        url={encodeURI(`mailto:${this.props.email}`)}
                    />
                }
            </Nav>
        );
    }
}

export default SocialSites;