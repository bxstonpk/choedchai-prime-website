import React from 'react'
import { Nav } from '../../components/nav/Nav'
import { pageManagement } from '../../utils/pageManagement';

export const Contact: React.FC = () => {
    pageManagement.changePageTitle('contact');
    
    return <>
        <Nav />
    </>
}
