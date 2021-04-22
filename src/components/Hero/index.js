import React from 'react'
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements'
import Sidebar from '../SideBar'
import NavBar from "../NavBar";
// FRAMER MOTION
import { pageAnimation, titleAnim, photoAnim } from '../../animation'

const Hero = ({toggle, isOpen}) => {

    return (
      <HeroContainer variants={pageAnimation} initial="hidden" animate="show">
        <NavBar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
          <HeroItems>
            <HeroH1 variants={titleAnim}>Welcome to our blessed Shop!</HeroH1>
            <HeroP variants={titleAnim}>Skateboards send from above</HeroP>
            <HeroBtn variants={titleAnim} to="/decks">
              See Decks
            </HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    );
}

export default Hero
