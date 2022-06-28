import React from 'react';
import {SideBtnWrap,SidebarContainer,SidebarLink,SidebarMenu,SidebarRoute,SidebarWrapper} from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer isOpen ={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to="about">About </SidebarLink>
            <SidebarLink to="discover">Discover</SidebarLink>
            <SidebarLink to="services">Services</SidebarLink>
            <SidebarLink to="signup">Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;