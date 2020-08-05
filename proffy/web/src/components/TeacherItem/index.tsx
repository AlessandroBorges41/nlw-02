
import React from "react";
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';


function TeacherIem() {
        return(

        <article className="teachers-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/11083462?s=460&u=29df2840190199e8df11ab0b68982905ab8d7229&v=4" 
            alt="Alessandro" />
            <div>
                <strong>Alessandro Borges</strong>
                <span>Inteligência Artificial</span>
            </div>
        </header>
        <p>
            Entusiasta das melhores tecnologias de AI avançada.
            <br /><br />
            Apaixonado por aplicar AI em componente biocibernéticos e por mudar a vida das pessoas através de experiencias de AI. 
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 40,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
        </article>

    );
}

export default TeacherIem;