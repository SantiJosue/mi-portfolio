import { useState } from "react";
import styled from "styled-components";
import { breakpoints } from "../../../breakpoints";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <>
            <Nav>
                <Title href="/">
                    Portafolio
                </Title>

                <DesktopMenu>
                    <a href="#educacion">Educación</a>
                    <a href="#tecnologias">Tecnologías</a>
                    <a href="#proyectos">Proyectos</a>
                    <a href="#contacto">Contacto</a>
                </DesktopMenu>


                <MenuBtn onClick={toggleMenu}>
                    <Menu />
                </MenuBtn>

            </Nav>
            <SideMenu $open={menuOpen}>
                <CloseButton onClick={toggleMenu}>
                    <X size={30}/>
                </CloseButton>
                <Item>
                    <a href="#educacion" onClick={toggleMenu}>
                        Educación
                    </a>
                </Item>
                <Item>
                    <a href="#tecnologias" onClick={toggleMenu}>
                        Tecnologías
                    </a>
                </Item>
                <Item>
                    <a href="#proyectos" onClick={toggleMenu}>
                        Proyectos
                    </a>
                </Item>
                <Item>
                    <a href="#contacto" onClick={toggleMenu}>
                        Contacto
                    </a>
                </Item>
            </SideMenu>
        </>
    );
};

const Nav = styled.header`
    height: var(--navbar-height);
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 10%;
    display: flex;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(87,108,188,.2);
    z-index: 20;
`;

const Title = styled.a`
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-decoration: none;
    color: var(--color-text);
`;

const DesktopMenu = styled.nav`
    display: flex;
    gap: 47px;

    a{
        color: var(--color-text);
        text-decoration:none;
        font-size:18px;
        transition: .3s;

        &:hover{
            color:var(--color-primary);
            transform: translateY(-3px);
        }
    }

    @media(max-width:${breakpoints.tablet}){
        display:none;
    }
`;

const MenuBtn = styled.button`
    display:none;
    background:none;
    border:none;  
    color:var(--color-text);
    cursor:pointer;


    @media(max-width:${breakpoints.tablet}){
        display:flex;
        align-items:center;
        justify-content:center;
        background:rgba(87,108,188,.15);
        border:1px solid rgba(87,108,188,.3);
        border-radius:50%;
        width:45px;
        height:45px;
    }
`;

const SideMenu = styled.ul`
    position: fixed;
    top: 0;
    right: 0;
    height: 100dvh;
    width: clamp(210px, 28vw, 300px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;
    margin: 0;
    padding: 0;
    list-style: none;
    background: linear-gradient(
        180deg,
        var(--color-dark),
        var(--color-bg)
    );
    border-left: 1px solid rgba(87,108,188,.25);
    box-shadow: -10px 0 30px rgba(0,0,0,.35);
    transform:${({$open}) =>
        $open 
        ? "translateX(0)" 
        : "translateX(100%)"
    };
    transition: transform .35s cubic-bezier(.4,0,.2,1);
    z-index:30;

    @media(max-width:${breakpoints.mobile}){
        width: clamp(180px, 60vw, 230px);
    }

    @media(max-width:480px){
        width: 55vw;
        max-width: 240px;
        min-width: unset;
    }
`;

const Item = styled.li`
    a{
        color:var(--color-text);
        text-decoration:none;
        font-size:1.3rem;
        font-weight:600;
        transition: color .2s ease;

        &:hover{
            color:var(--color-primary);
        }
    }
`;

const CloseButton = styled.button`
    position:absolute;
    top:25px;
    right:25px;
    background:rgba(87,108,188,.15);
    border:1px solid rgba(87,108,188,.3);
    border-radius:50%;
    width:45px;
    height:45px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:var(--color-text);
    cursor:pointer;
    transition:.25s ease;

    &:hover{
        background:var(--color-primary);
    }
`;

export default Navbar;