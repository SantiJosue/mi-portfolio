import styled from "styled-components";
import './vars.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Educacion from "./components/Education/Education";
import Technologies from "./components/Technologies/Technologies";

const App = () => {
  return (
    <Main>
      <Navbar />
      <Hero />
      <Educacion />
      <Technologies />
      <Projects />
      <Contact />
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: var(--color-bg);
  color: var(--color-text);
`;
 
export default App;