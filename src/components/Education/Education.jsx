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
    padding: 73px;
    margin-top: 79px;
    margin-left: 10%;
    margin-right: 10%;

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
    margin-top: 14px;

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

    @media screen and (max-width: ${breakpoint}) {
        text-align: center;
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