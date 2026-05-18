import React from 'react'
import { Nav } from '../../components/nav/Nav'
import { pageManagement } from '../../utils/pageManagement'

export const About: React.FC = () => {
    pageManagement.changePageTitle('about');

    return <>
        <Nav />
    </>
}
