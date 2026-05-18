import React from 'react'
import { Nav } from '../../components/nav/Nav'
import { pageManagement } from '../../utils/pageManagement'

export const Home: React.FC = () => {
  pageManagement.changePageTitle('home');
  
  return <>
    <Nav />
  </>
}
