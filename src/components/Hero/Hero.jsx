import { getImageUrl } from "../../utils";
import styled from "styled-components";
import './../../vars.css';
import { breakpoints } from "../../../breakpoints";
import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
    return (
        <Container>
            <Content>
                <Title>Santiago Fernández</Title>
                <h2>Frontend Developer</h2>
                <Description>
                    Soy desarrollador Front-end especializado en React y TypeScript. Me apasiona crear interfaces modernas, responsivas y accesibles, aplicando buenas prácticas de desarrollo. Actualmente continúo ampliando mis conocimientos en desarrollo Full Stack y construyendo proyectos que me permiten seguir creciendo profesionalmente.
                </Description>
                <ContainerBtn>
                    <ContactBtn href="#proyectos">Proyectos <ArrowRight size={18} /></ContactBtn>
                    <ContactBtn href="mailto:santiiagofer22@gmail.com">Contactame <Mail size={18} /></ContactBtn>
                </ContainerBtn>
            </Content>
            <HeroImg src={getImageUrl("hero/heroImage2.png")} alt="Fotografía de Santiago Fernández" />
            <TopBlur></TopBlur>
            <BottomBlur></BottomBlur>
        </Container>
    );
}

const Container = styled.section`
    min-height: calc(100dvh - var(--navbar-height));
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10%;

    @media screen and (max-width: ${breakpoints.tablet}) {
        padding: 1rem 10% 0;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: var(--color-text);
    z-index: 1;

    @media screen and (max-width: ${breakpoints.tablet}) {
        align-items: center;
    }

    h2{
        color: var(--color-text);
        font-size: clamp(1.4rem, 3vw, 2rem);
        letter-spacing: 1px;
        font-weight: 600;
    }
`;

const Title = styled.h1`
    font-size: clamp(2rem, 8vw, 3.8rem);
    line-height: 1.1;
    font-weight: 900;
    font-family: var(--font-roboto);
`;

const Description = styled.p`
    max-width: 620px;
    font-family: var(--font-roboto);
    font-size: clamp(1rem, 2vw, 1.125rem);
    line-height: 1.5;
    color: rgba(255,255,255,.88);
`;

const ContainerBtn = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:20px;

    @media (max-width:${breakpoints.tablet}){
        gap:14px;
        width:auto;
        margin-top:0.5rem;

    }
`;

const ContactBtn = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    text-decoration:none;
    background-color:var(--color-primary);
    color:var(--color-text);
    border-radius:100px;
    font-size: clamp(.95rem,1.5vw,1rem);
    padding:
        clamp(10px, 1.5vw, 14px)
        clamp(20px, 3vw, 28px);
    font-weight:600;
    min-width:120px;
    text-align:center;
    box-shadow: 0 0 4px rgba(0,0,0,.25);
    transition: .3s;

    &:hover{
        background-color:var(--color-text);
        color:var(--color-primary);
        transform:scale(1.03);
    }

    @media(max-width:${breakpoints.tablet}){
        width:auto;
    }
`;

const HeroImg = styled.img`
    width:clamp(180px, 35vw, 400px);
    height:clamp(180px, 35vw, 400px);
    border-radius: 100%;
    display: block;
    object-fit: cover;
    z-index: 1;
    box-shadow: 0 15px 35px rgba(0,0,0,.35);
    animation: float 6s ease-in-out infinite;
    filter: drop-shadow(0 20px 35px rgba(87,108,188,.25));
    border: 2px solid rgba(87,108,188,.15);

    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 200px;
        height: 200px;
    }

    @keyframes float {
        0%{
            transform: translateY(0);
        }

        50%{
            transform: translateY(-8px);
        }

        100%{
            transform: translateY(0);
        }
    }
`;

const TopBlur = styled.div`
    position: absolute;
    width: 50vh;
    height: 50vh;
    min-width: 350px;
    min-height: 350px;
    top: -128px;
    left: -10vw;
    border-radius: 764px;
    background: rgba(25, 55, 109, 0.7);
    filter: blur(100px);
    z-index: 0;
`;

const BottomBlur = styled.div`
    position: absolute;
    width: 70vh;
    height: 50vh;
    min-width: 250px;
    min-height: 250px;
    top: 246px;
    right: -25vw;
    border-radius: 764px;
    background: rgba(25, 55, 109, 0.7);
    filter: blur(100px);
    z-index: 0;
`;

export default Hero;