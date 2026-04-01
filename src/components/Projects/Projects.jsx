import projects from './../../data/projects.json';
import ProjectCard from './ProjectCard';
import styled from 'styled-components';

const Projects = () => {
    return (
        <Container id='proyectos'>
            <Title>Proyectos</Title>
            <Content>
                {
                    projects.map((project, id) => {
                        return <ProjectCard project={project} key={id}/>
                    })
                }
            </Content>
        </Container>
    );
}

const breakpoint = "1024px"

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
    font-weight: 700;
    letter-spacing: 1.75px;
    text-transform: uppercase;

    @media screen and (max-width: 830px) {
        text-align: center;
    }
`;

const Content = styled.div`
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    @media screen and (max-width: 830px) {
        justify-content: center;
        gap: 30px;
    }
`;

export default Projects;