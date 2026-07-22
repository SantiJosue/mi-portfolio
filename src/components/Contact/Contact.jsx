import { breakpoints } from "../../../breakpoints";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <Container id="contacto">
      <Text>
        <h2>Contacto</h2>
        <p>Puedes encontrarme en:</p>
      </Text>
      <address>
        <Links>
          <li>
            <Link
              href="mailto:santiiagofer22@gmail.com"
              aria-label="Correo electrónico"
            >
              <FaEnvelope size={30} />
            </Link>
          </li>

          <li>
            <Link
              href="https://www.linkedin.com/in/santiago-fernández-4b8bb1232/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} />
            </Link>
          </li>

          <li>
            <Link
              href="https://github.com/SantiJosue"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={30} />
            </Link>
          </li>
        </Links>
      </address>
    </Container>
  );
};

const Container = styled.footer`
  color: var(--color-text);
  background: rgba(4, 21, 45, 0.45);
  border-top: 1px solid rgba(87, 108, 188, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 10%;
  gap: 60px;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }

  address {
    font-style: normal;
  }
`;

const Text = styled.section`
  h2 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 2px;
    font-family: var(--font-roboto);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 30%,
      rgba(255, 255, 255, 0) 120%
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: transparent;
  }

  p {
    font-size: 20px;
    font-weight: 400;
  }

  @media screen and (max-width: 830px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Links = styled.ul`
  display: flex;
  gap: 26px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;
  }
`;

const Link = styled.a`
  width: 65px;
  height: 65px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: rgba(25, 55, 109, 0.25);
  border: 1px solid rgba(87, 108, 188, 0.3);

  color: var(--color-text);
  text-decoration: none;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: var(--color-primary);
    box-shadow: 0 10px 20px rgba(87, 108, 188, 0.3);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export default Contact;
