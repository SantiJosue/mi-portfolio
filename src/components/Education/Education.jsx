import styled from "styled-components";
import { getImageUrl } from "../../utils";
import { Section } from "../common/Section";
import { cardStyles } from "../common/Card";
import education from './../../data/education.json'

const Education = () => {
    return (
        <Container id="educacion">
            <Title>Educación</Title>
            <EducationSection>
            {education.map((education) => (
                    <EducationItem key={education.title}>
                        <EducationLogo>
                            <EducationImg src={getImageUrl(education.institutionLogo)} alt="Logo de Argentina Programa" />
                        </EducationLogo>
                        <h3>{education.title}</h3>
                        <Date><strong>{education.year[0]} <Separator>-</Separator> {education.year[1]}</strong></Date>
                        <CertificateBtn href={education.certificate} target="_blank" rel="noopener noreferrer">Ver certificado</CertificateBtn>
                    </EducationItem>
            ))}
            </EducationSection>
        </Container>
    );
}

const Container = styled(Section)`
    color: var(--color-text);
    background: rgba(12, 12, 12, 0.4);
    border-radius: 15px;
    position: relative;
    padding: 2rem 5%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
`;

const Title = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
`;

const EducationSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const EducationImg = styled.img`
    width:90%;
    height:90%;
    filter:invert(1);
    object-fit:contain;
`;
 
const EducationItem = styled.article`
    ${cardStyles}

    flex: 1 1 280px;
    max-width: 340px;
    min-height: 300px;
    padding: clamp(1.5rem, 4vw, 2rem);
    color:inherit;
    display:flex;
    flex-direction:column;
    justify-content:center;
    justify-self: center;
    align-items:center;
    gap:1rem;
    transition: .3s;

    h3{
        color:var(--color-primary);
        font-size:clamp(1.2rem,2vw,1.4rem);
        margin:0;
    }

    span {
        color: var(--color-primary);
    }
`;

const Date = styled.p`

`

const Separator = styled.span`
    
`

const CertificateBtn = styled.a`
    text-decoration: none;
    color: var(--color-text);
    font-size: 16px;
    font-weight: 600;
    border-radius: 100px;
    background: var(--color-primary);
    padding: .5rem 3rem;
    transition: 0.3s;
    width: 100%;

    &:hover{
        background-color:var(--color-text);
        color:var(--color-primary);
    }
`

const EducationLogo = styled.div`
    width:clamp(120px, 8vw, 140px);
    height:clamp(120px, 8vw, 140px);
    display:flex;
    justify-content:center;
    align-items:center;
    background:rgba(4,21,45,.7);
    border-radius:50%;
    border: 1px solid rgba(87,108,188,.25);
    padding:12px;
`;

export default Education;