import { getImageUrl } from "../../utils";
import styled from "styled-components";
import './../../vars.css';

const Hero = () => {
    return (
        <Container>
            <Content>
                <Title>Santiago Fernández</Title>
                <h2>Sobre mi</h2>
                <Description>
                    Actualmente estoy enfocado en el desarrollo Front-end.
                    Mi principal objetivo es ampliar mis conocimientos en los distintos lenguajes de programacion y seguir creciendo profesionalmente.
                </Description>
                <ContainerBtn>
                    <ContactBtn href="#proyectos" id="#proyectos">Proyectos</ContactBtn>
                    <ContactBtn href="mailto:myemail@email.com">Contactame</ContactBtn>
                </ContainerBtn>
            </Content>
            <HeroImg src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" />
            <TopBlur></TopBlur>
            <BottomBlur></BottomBlur>
        </Container>
    );
}

const breakpoint = "1024px";

const Container = styled.section`
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    margin-top: 3rem;
    z-index: 1;

    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 10%;

    @media screen and (max-width: 1024px) {
        flex-direction: column-reverse;
        margin-top: 2rem;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-text);
    z-index: 1;

    @media screen and (max-width: ${breakpoint}) {
        align-items: center;
    }

    h2{
        color: var(--color-text);
        font-size: 30px;
        font-weight: 700;
        letter-spacing: 1.75px;
        text-transform: uppercase;

        @media screen and (max-width: ${breakpoint}) {
            margin-top: 2rem;
        }
    }
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 900;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-family: var(--font-roboto);

    @media screen and (max-width: ${breakpoint}) {
        font-size: 30px;
        margin-top: 14px;
        margin-bottom: 0;
    }
`;

const Description = styled.p`
    font-size: 20px;
    font-family: var(--font-roboto);
    margin-bottom: 52px;
    margin-top: 14px;

    @media screen and (max-width: ${breakpoint}) {
        font-size: 25px;
        margin-bottom: 14px;
    }
`;

const ContainerBtn = styled.div`
    display: flex;
    gap: 15px;
`;

const ContactBtn = styled.a`
    text-decoration: none;
    background-color: var(--color-primary);
    color: var(--color-text);
    border-radius: 100px;
    font-size: 25px;
    font-weight: 600;
    padding: 17px 26px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    transition: all .3s;

    &:hover{
        background-color: var(--color-text);
        color: var(--color-primary);
    }

    @media screen and (max-width: ${breakpoint}) {
        font-size: 22px;
        padding: 8px 16px;
        margin-top: 2rem;
    }
`;

const HeroImg = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 100%;
    display: block;
    object-fit: cover;
    z-index: 1;

    @media screen and (max-width: ${breakpoint}) {
        width: 200px;
        height: 200px;
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