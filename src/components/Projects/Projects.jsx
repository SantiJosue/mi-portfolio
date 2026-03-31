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

const Container = styled.section`
    margin-top: 76px;
    background: rgba(12, 12, 12, 0.4);
    border-radius: 15px;
    padding: 73px;
    color: var(--color-text);
    margin-left: 10%;
    margin-right: 10%;

    @media screen and (max-width: 830px) {
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
    margin-top: 37px;
    display: flex;
    flex-direction: row;
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