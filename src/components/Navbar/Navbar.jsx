import { useState } from 'react';
import {getImageUrl} from './../../utils';
import styled from "styled-components";

const Navbar = () => {
    const [icon, setIcon] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIcon(!icon);
        setMenuOpen(!menuOpen);
    };

    return (
        <Nav>
            <Title href="/">Portafolio</Title>
            <Menu>
                <MenuBtn src={
                    icon
                    ? getImageUrl("nav/closeIcon.png")
                    : getImageUrl("nav/menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={toggleMenu}
                />
                <MenuItem $menu={menuOpen}>
                    <li><a href="#educacion">Educación</a></li>
                    <li><a href="#tecnologias">Tecnologías</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </MenuItem>
            </Menu>
        </Nav>
    );
}

const breakpoint = "1024px";

const Nav = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 61px;
    z-index: 2;
    margin: 0 10%;

    @media screen and (max-width: ${breakpoint}){
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Title = styled.a`
    font-size: 25px;
    font-weight: 600;
    text-decoration: none;
    color: var(--color-text);
`;

const Menu = styled.nav`
    display: flex;

    @media screen and (max-width: ${breakpoint}){
        position: absolute;
        right: 0;
        margin-right: 10%;
        flex-direction: column;
        align-items: flex-end;
        gap: 11px;
        z-index: 3;
    }
`;

const MenuBtn = styled.img`
    display: none;

    @media screen and (max-width: ${breakpoint}){
        display: block;
        cursor: pointer;
        object-fit: contain;
    } 
`;

const MenuItem = styled.ul`
    display: flex;
    gap: 47px;
    list-style: none;
    
    @media screen and (max-width: ${breakpoint}){
        display: ${props => props.$menu ? "flex" : "none"};
        flex-direction: column;
        align-items: center;
        gap: 13px;
        border-radius: 10px;
        background: rgb(25, 55, 109);
        background: linear-gradient(0deg, rgba(25, 55, 109, 0.2) 0%, rgba(25, 55, 109, 1) 100%);
        padding: 24px 33px;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    }

    li{
        transition: all .3s;

        &:hover{
            transform: translateY(5px);
        }
    }

   a {
        font-size: 25px;
        text-decoration: none;
        color: var(--color-text);
        transition: all .3s;

        &:hover{
            color: var(--color-primary);
        }
   }
`;
 
export default Navbar;