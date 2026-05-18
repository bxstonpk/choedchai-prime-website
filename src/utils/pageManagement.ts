export const pageManagement = {
    getPageTitle: (pageName: string) => {
        switch (pageName) {
            case 'home':
                return 'Home - Choedchai Prime Engineering Company Limited';
            case 'about':
                return 'About Us - Choedchai Prime Engineering Company Limited';
            case 'services':
                return 'Our Services - Choedchai Prime Engineering Company Limited';
            case 'contact':
                return 'Contact Us - Choedchai Prime Engineering Company Limited';
            default:
                return 'Choedchai Prime Engineering Company Limited';
        }
    },

    changePageTitle: (pageName: string) => {
        document.title = pageManagement.getPageTitle(pageName);
    }
}