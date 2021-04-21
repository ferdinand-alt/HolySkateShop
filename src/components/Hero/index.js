import React, {useState} from 'react'
import NavBar from '../NavBar'
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements'
import Sidebar from '../SideBar'
// State

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <HeroContainer>
            <NavBar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>
                        Welcome to our blessed Shop!
                    </HeroH1>
                    <HeroP>
                        Skateboards send from above
                    </HeroP>
                    <HeroBtn>
                        See Shop
                    </HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
