import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute } from './SidebarElements';

const Sidebar = ({toggle, isOpen}) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink to="/decks">Decks</SidebarLink>
          <SidebarLink to="/wheels&apparel">Wheels & Apparel</SidebarLink>
          <SidebarLink to="/contact">CONTACT</SidebarLink>
          <SidebarLink to="/">HOME</SidebarLink>
        </SidebarMenu>
      </SidebarContainer>
    );
}

export default Sidebar
