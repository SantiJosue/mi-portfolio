/* eslint-disable react/prop-types */
import styled from "styled-components";
import { getImageUrl } from "../../utils";
import { breakpoints } from "../../../breakpoints";
import { cardStyles } from "../common/Card";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { title, year, imageSrc, description, skills, source, demo, completed } = project

  return (
    <Container>
      <Image src={getImageUrl(imageSrc)} alt={`Captura del proyecto ${title}`} />
      <Title>{title}</Title>
      <Year>{year}</Year>
      <Description>{description}</Description>
      <Skills>
        {skills.map((skill) => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </Skills>
      <Links>
        <Link href={source} target="_blank" rel="noopener noreferrer">
          <FaGithub size={18} />
          Código
        </Link>
        {completed && <Link href={demo} target="_blank" rel="noopener noreferrer">
          <ExternalLink size={18} />
          Proyecto
        </Link>}
      </Links>
    </Container>
  );
};

const Container = styled.article`
  ${cardStyles}

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: clamp(280px, 30vw, 360px);
  padding: clamp(1rem, 3vw, 1.5rem);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);

  @media (max-width: ${breakpoints.tablet}) {
    width:100%;
    max-width:360px;
  }
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 15px;
  border: 1px solid rgba(87, 108, 188, 0.25);
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: var(--color-primary);
`;

const Year = styled.p`
  width: fit-content;
  font-size: 14px;
  color: #c0c0c0d8;
  border-radius: 100px;
  background: rgba(4, 21, 45, 0.8);
  border: 1px solid rgba(87, 108, 188, 0.25);
  padding: 6px 14px;
  transition: .3s;
`

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const Skills = styled.ul`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
`;

const Skill = styled.li`
  font-size: 14px;
  border-radius: 100px;
  background: rgba(4, 21, 45, 0.8);
  border: 1px solid rgba(87, 108, 188, 0.25);
  padding: 6px 14px;
  transition: .3s;
`;

const Links = styled.footer`
  margin-top: auto;
  display: flex;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const Link = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  text-decoration: none;
  color: var(--color-text);
  font-size: 16px;
  font-weight: 600;
  border-radius: 100px;
  background: var(--color-primary);
  padding: .75rem 1rem;
  transition: .3s;

  &:hover {
    background: var(--color-text);
    color: var(--color-primary);
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

export default ProjectCard;
