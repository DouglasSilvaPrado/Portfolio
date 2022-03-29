import React from 'react'

function Contact() {
    return ( 
        <>
            <div className="container my-5 pt-5" id="contato">
                <h2 className="text-center mb-5">
                    Entre em contato
                </h2>
                <div>
                    <form action="https://formsubmit.co/douglassilvadaprado@gmail.com" method="POST">
                        <div className="form-group">      
                            <input
                            type="text"
                            className="form-control my-3"
                            placeholder="Digite seu nome"
                            name="Nome"
                            required={true}
                            />
                            <input
                            type="email"
                            className="form-control my-3"
                            placeholder="Digite seu Email"
                            name="Email"
                            required={true}
                            />
                            <textarea placeholder="Digite sua Mensagem" rows="4" cols="50" name="mensagem" required={true} className="form-control my-3"></textarea>
                            <input type ="hidden" name ="_captcha" value ="false"/>
                            <input type ="hidden" name ="_autoresponse" value ="Mensagem enviada!"/>
                            <input type ="hidden" name ="_next" value ="http://localhost:3000/"/>
                            <button className="btn btn-primary form-control my-3">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
     );
}

export default Contact;