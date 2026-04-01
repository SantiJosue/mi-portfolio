import { getImageUrl } from '../../utils';
import skills from '../../data/skills.json';
import styled from 'styled-components';

const Technologies = () => {
    return (
        <Container id="tecnologias">
            <Title>Tecnologías</Title>
                <Content>
                    <Skills>
                        {
                            skills.map((skill, id) => {
                                return <Skill key={id}>
                                            <SkillImageContainer>
                                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                            </SkillImageContainer>
                                            <p>{skill.title}</p>
                                        </Skill>
                            })
                        }
                    </Skills>
                </Content>
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
    color: var(--color-text);
    font-size: 35px;
    font-weight: 700;
    letter-spacing: 1.75px;
    text-transform: uppercase;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 14px;

    @media screen and (max-width: ${breakpoint}) {
        flex-direction: column;
        align-items: center;
        gap: 34px;
    }
`;

const Skills = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
    gap: 37px;

    @media screen and (max-width: ${breakpoint}) {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 14px;
    }
`;

const Skill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 11px;
    transition: all .3s;

    &:hover{
        opacity: .8;
    }

    p{
        font-size: 25px;
        font-family: var(--font-roboto);
        font-weight: 500;
    }
`;

const SkillImageContainer = styled.figure`
    background-color: var(--color-dark);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;

    img{
        width: 75px;
        object-fit: contain;
    }
`;

export default Technologies;