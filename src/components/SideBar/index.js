import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap} from './SidebarElements'

const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Decks</SidebarLink>
                <SidebarLink to="/">Wheels</SidebarLink>
                <SidebarLink to="/">Appereal</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/"></SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
