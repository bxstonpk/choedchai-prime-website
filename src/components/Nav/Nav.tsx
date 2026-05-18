import React from 'react'

import { NavLayout } from './NavLayout'
import logoImg from '../../assets/logo/logo-removebg-preview.png'
import { appConfig } from '../../config'

/*
    This component is used to display the navigation bar.
    This component uses the NavLayout component to layout the navigation bar.
*/

export const Nav : React.FC = () => {
  return <>
    <NavLayout 
      logoImg={logoImg}
      navItems={
        appConfig.nav.map((item) => ({
          navName: item.navName,
          navLink: item.navLink,
        }))
      }
      contactInfo={{
        email: appConfig.contactInfo.email,
        phone: appConfig.contactInfo.phone
      }}
    />
  </>
}
