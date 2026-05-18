import React from 'react'
import { Nav } from '../../components/nav/Nav'
import { pageManagement } from '../../utils/pageManagement'

export const Service: React.FC = () => {
    pageManagement.changePageTitle('services');
    
    return <>
        <Nav />
    </>
}
