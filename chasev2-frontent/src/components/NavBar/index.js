import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinksS,
    NavLinksR,
    NavBtn,
    NavBtnLink,
    NavImg,
} from './NavBarElements'

const NavBar = ({ toggle }) => {

    const [aboutHome, setAboutHome] = useState(true);

    function handleClickOff(){
        setAboutHome(false);
    };

    function handleClickOn(){
        setAboutHome(true);
    };

    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavImg src={require("../../images/CS.png")} alt="logo" class="logo" id="nav-logo"/>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        { aboutHome ? 
                            <NavLinksS to='about'>
                                About
                            </NavLinksS> :
                            <NavLinksR to='/' onClick={handleClickOn}>
                                Home
                            </NavLinksR>
                        }
                    </NavItem>
                    <NavItem>
                        <NavLinksR to="/projects" onClick={handleClickOff}>
                            Projects
                        </NavLinksR>
                    </NavItem>
                    <NavItem>
                        <NavLinksR to="/blog" onClick={handleClickOff}>
                            Blog
                        </NavLinksR>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        Contact
                    </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
    )
}

export default NavBar