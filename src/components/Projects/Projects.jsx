import { breakpoints } from '../../../breakpoints';
import { Section } from '../common/Section';
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

const Container = styled(Section)`
    color: var(--color-text);
    position: relative;
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

    @media screen and (max-width: 830px) {
        text-align: center;
    }
`;

const Content = styled.div`
    display: flex;
    gap:2rem;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: ${breakpoints.mobile}) {
        justify-content: center;
        gap: 30px;
    }
`;

export default Projects;