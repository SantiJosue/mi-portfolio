import { getImageUrl } from "../../utils";
import styled from "styled-components";

const Contact = () => {
    return (
        <Container id="contacto">
            <Text>
                <h2>Contacto</h2>
                <p>Puedes encontrarme en:</p>
            </Text>
            <address>
                <Links>
                    <Link>                    
                        <a href="https://mail.google.com/mail/u/0/#inbox">
                            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon: myemail@email.com" />
                        </a>
                    </Link>
                    <Link>                      
                        <a href="https://www.linkedin.com/in/santiago-fernández-4b8bb1232/">
                            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon: linkedin.com/myname" />
                        </a>
                    </Link>
                    <Link>                        
                        <a href="https://github.com/SantiJosue?tab=repositories">
                            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon: github.com/myname" />
                        </a>
                    </Link>
                </Links>
            </address>
        </Container>
    );
}

const Container = styled.footer`
    color: var(--color-text);
    margin-top: 120px;
    background: rgba(12, 12, 12, 0.4);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    padding: 58px 10%;
    gap: 10px;

    @media screen  and (max-width: 830px){
        flex-direction: column;
        gap: 23px;
    }
`;

const Text = styled.section`
    h2{
        font-size: 80px;
        font-weight: 700;
        letter-spacing: 4px;
        font-family: var(--font-roboto);
        background: linear-gradient(90deg,
        rgba(255, 255, 255, 1) 30%,
        rgba(255, 255, 255, 0) 120%
        );
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: transparent;
    }

    p{
        font-size: 30px;
        font-weight: 400;
    }

    @media screen  and (max-width: 830px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Links = styled.ul`
    display: flex;
    align-items: flex-start;
    list-style: none;
    gap: 26px;

    @media screen  and (max-width: 830px){
        align-items: center;
    }
`;

const Link = styled.li`
    display: flex;
    align-items: center;
    gap: 25px;
    transition: all .3s;

    &:hover{
        opacity: 0.8;
        scale: 1.1;
        cursor: pointer;
    }

    a{
        color: var(--color-text);
        text-decoration: none;
        font-size: 30px;
        font-weight: 400;
        letter-spacing: 1.5px;
    }
`;

export default Contact;