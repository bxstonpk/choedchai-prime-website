import React from 'react'

/*
    This component is used to layout the navigation bar.
    This component has 3 sections:
    1. The left section is used to display the logo.
    2. The middle section is used to display the navigation links.
    3. The right section is used to display the contact information.
*/

type NavLayoutProps = {
    logoImg: string,
    navItems: NavContent[],
    contactInfo: ContactInfo,
}

type NavContent = {
    navName: string,
    navLink: string,
}

type ContactInfo = {
    email: string,
    phone: string,
}

export const NavLayout: React.FC<NavLayoutProps> = ({ logoImg, navItems, contactInfo }) => {
    return <>
        <nav className='fixed w-full h-20 border-b-1 border-(--color-light-gray) flex items-center justify-between px-4'>
            <div className='flex items-center gap-2'>
                {/* Logo */}
                <img src={logoImg} alt="Logo" className='h-30' />
            </div>
            <div className='flex items-center gap-16'>
                {/* Navigation Links */}
                {navItems.map((item, index) => (
                    <a key={index} href={item.navLink} className='text-(--color-dark-gray) hover:text-(--color-primary) transition-colors duration-300'>
                        {item.navName}
                    </a>
                ))}
            </div>
            <div className='flex flex-col items-center gap-2'>
                {/* Contact Information */}
                <p className='text-(--color-dark-gray)'>
                    Contact Us: {contactInfo.email}
                </p>
                <p className='text-(--color-dark-gray)'>
                    Phone: {contactInfo.phone}
                </p>
            </div>
        </nav>
    </>
}
