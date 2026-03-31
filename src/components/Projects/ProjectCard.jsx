/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { getImageUrl } from '../../utils';

// eslint-disable-next-line react/prop-types
const ProjectCard = ({project: {title, imageSrc, description, skills, demo, source}}) => {
  return (
    <Container>
      <Image
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
      />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Skills>
        {skills.map((skill, id) => {
          return <Skill key={id}>{skill}</Skill>;
        })}
      </Skills>
      <Links>
        <Link href={demo}>Demo</Link>
        <Link href={source}>Source</Link>
      </Links>
    </Container>
  );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: linear-gradient(180deg, #576cbc 0%, #132a53 100%);
    box-shadow: 0 16px 14px 0 #04152d;
    padding: 18px 24px;
    max-width: 345px;
    transition: all .3s ease;

    @media screen and (max-width: 830px) {
          padding: 18px 12px;
          /* width: 100%; */
          max-width: 300px;
        }

    &:hover{
        transform: scale(1.05);
    }
`;

const Image = styled.img`
    margin-bottom: 26px;

    @media screen and (max-width: 830px) {
          width: 100%;
        }
`;

const Title = styled.h3`
    font-size: 25px;
    font-weight: 700;
`;

const Description = styled.p`
    margin-top: 6px;
    font-size: 25px;
    font-weight: 400;
`;

const Skills = styled.ul`
    width: 100%;
    margin-top: 14px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6px;
    list-style: none;
`;

const Skill = styled.li`
    font-size: 20px;
    font-weight: 400;
    border-radius: 100px;
    background: var(--color-dark);
    padding: 4px 22px;

    transition: all .3s;

    &:hover{
      background: #0e2b55;
      cursor: pointer;
    }
`;

const Links = styled.footer`
    width: 100%;
    margin-top: 26px;
    display: flex;
    justify-content: space-evenly;
`;

const Link = styled.a`
    text-decoration: none;
    color: var(--color-text);
    font-size: 25px;
    border-radius: 100px;
    background: var(--color-primary);
    padding: 6px 18px;
    transition: all .3s;

    &:hover{
      opacity: 0.8;
    }
`;

export default ProjectCard;
