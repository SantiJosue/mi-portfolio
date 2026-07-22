import { icons } from '../../utils';
import skills from '../../data/skills.json';
import styled from 'styled-components';
import { breakpoints } from '../../../breakpoints';
import { Section } from '../common/Section';
import {  cardStyles } from '../common/Card';

const Technologies = () => {
    
    return (
        <Container id="tecnologias">
            <Title>Tecnologías</Title>
                <Skills>
                {skills.map((skill) => {
                    const Icon = icons[skill.icon];

                    return (
                    <Skill key={skill.title}>
                        <SkillImageContainer>
                        <Icon size={50} />
                        </SkillImageContainer>

                        <SkillName>{skill.title}</SkillName>
                    </Skill>
                    );
                })}
                </Skills>
        </Container>
    );
}

const Container = styled(Section)`
    color: var(--color-text);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    @media screen and (max-width: ${breakpoints.tablet}) {
        padding: 2rem 1rem;
    }
`;
 
const Title = styled.h2`
    color: var(--color-text);
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
`;

const Skills = styled.ul`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:30px;
`;

const Skill = styled.li`
    ${cardStyles}

    width:clamp(140px,20vw,150px);
    min-height:170px;
    display:flex;
    padding: 0 1rem;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:10px;
`;

const SkillName = styled.p`
    margin:0;
    font-size:1rem;
    font-family:var(--font-roboto);
    font-weight:700;
`

const SkillImageContainer = styled.figure`
  width: 85px;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  background: rgba(4, 21, 45, 0.8);
  border-radius: 50%;
  border: 1px solid rgba(87, 108, 188, 0.25);
`;

export default Technologies;