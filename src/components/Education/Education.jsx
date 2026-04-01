import styled from "styled-components";
import { getImageUrl } from "../../utils";

const Education = () => {
    return (
        <Container id="educacion">
                <Title>Educación</Title>
            <EducationSection>
                <EducationItem>
                    <EducationImg src={getImageUrl("education/ArgPrograma.svg")} alt="Logo de Argentina Programa" />
                    <h3>Desarrollador Web Full-Stack Jr</h3>
                    <p><strong>Marzo 2022 <span>-</span> Enero 2023</strong></p>
                </EducationItem>
                <EducationItem>
                    <EducationImg src={getImageUrl("education/UdemyLogo.svg")} alt="Logo de Argentina Programa" />
                    <h3>React y Firebase</h3>
                    <p><strong>Febrero 2023 <span>-</span> Octubre 2023</strong></p>
                </EducationItem>
                <EducationItem>
                    <EducationImg src={getImageUrl("education/UdemyLogo.svg")} alt="Logo de Argentina Programa" />
                    <h3>NodeJS</h3>
                    <p><strong>Noviembre 2023 <span>-</span> Junio 2024</strong></p>
                </EducationItem>
            </EducationSection>
        </Container>
    );
}

const breakpoint = "1024px";

const Container = styled.section`
    color: var(--color-text);
    background: rgba(12, 12, 12, 0.4);
    border-radius: 15px;
    position: relative;
    padding: 2rem 5%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    margin: 6rem auto 0 auto;
    max-width: 1200px;

    @media screen and (max-width: ${breakpoint}) {
        padding: 73px 10px;
    }
`;

const Title = styled.h2`
    font-size: 35px;
    font-size: 35px;
    font-weight: 700;
    letter-spacing: 1.75px;
    text-transform: uppercase;

    @media screen and (max-width: ${breakpoint}) {
        text-align: center;
    }
`;

const EducationSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: ${breakpoint}) {
        flex-direction: column;
        justify-content: center;
        gap: 20px;
    }
`;

const EducationImg = styled.img`
    width: 140px;
    filter: invert(1);
    object-fit: contain;
`;
 
const EducationItem = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px 15px;
    border-radius: 10px;

    @media screen and (max-width: ${breakpoint}) {
        text-align: center;
        gap: 0;
    }

    h3{
        color: var(--color-primary);
        font-size: 22px;
    }

    span {
        color: var(--color-primary);
        font-size: 18px;
    }
`;

export default Education;