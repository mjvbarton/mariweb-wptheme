import React from 'react';
import Footer from './Footer';
import Header from './Header';

class Contact extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <div className="mt-10 md:mt-0 md:fixed z-10">
                    <img src="https://i.pinimg.com/originals/b5/60/ca/b560ca9bd65061bda698321a17d22f34.jpg" alt="heading of article" className="object-cover w-screen z-0"/>
                </div>
                <div className="md:absolute md:z-20 md:mt-32 flex-row space-y-0 md:w-full">
                    <main id="contact" className="md:mx-32 min-h-max px-5 md:px-10 py-5 md:mb-32 bg-black bg-opacity-80 text-gray-200 font-serif font-extralight">                    
                        <h1 className="text-left font-sans font-light uppercase text-3xl my-5">Kontakt</h1>                        
                        <p>Líbí se vám moje práce? Máte nějaký dotaz? Neváhejte a napište mi!</p>
                        <form id="contactMail">
                            <fieldset>
                                <label for="from">Váš email:</label>
                                <input type="email" name="from" id="from" placeholder="např. josef.novak@example.com" />
                            </fieldset>
                            <fieldset>
                                <label for="subject">Předmět:</label>
                                <input type="text" name="subject" id="subject" placeholder="např. Dotaz na článek" />
                            </fieldset>
                            <fieldset>
                                <label for="messageBody">Text zprávy:</label>
                                <textarea name="messageBody" id="messageBody" placeholder="Sem napište text, vaší zprávy..."/>
                            </fieldset>            
                            <fieldset>
                                <label for="sendCopy">Odeslat kopii zprávy na můj email</label>
                                <input type="checkbox" id="sendCopy" value="sendcopy" />
                            </fieldset>
                            <input type="submit" value="Odeslat zprávu" />
                        </form>                                              
                    </main>                    
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Contact;