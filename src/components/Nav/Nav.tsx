import React from 'react'
import { NavLayout } from './NavLayout'
import logoImg from '../../assets/logo/logo-removebg-preview.png'

/*
    This component is used to display the navigation bar.
    This component uses the NavLayout component to layout the navigation bar.
*/

export const Nav : React.FC = () => {
  return <>
    <NavLayout 
      logoImg={logoImg}
      navItems={[
        { navName: 'Home', navLink: '/' },
        { navName: 'About', navLink: '/about' },
        { navName: 'Services', navLink: '/services' },
        { navName: 'Contact', navLink: '/contact' }
      ]}
      contactInfo={{
        email: 'info@company.com',
        phone: '+1 (123) 456-7890'
      }}
    />
  </>
}
