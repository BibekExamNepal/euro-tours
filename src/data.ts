export const navItems = [
    { label: 'Home', href: '/' },
    {
        label: 'Destinations',
        href: '/destinations',
        children: [
            {
                group: 'TOP DESTINATIONS',
                items: [
                    {
                        label: 'All Destinations',
                        description: 'Handpicked destinations featuring mountains, cities, nature, and culture.',
                        href: '/destinations',
                    },
                    {
                        label: 'International Tours',
                        description: 'Carefully planned international holiday packages and tours.',
                        href: '/destinations/international',
                    },
                ],
            },
            {
                group: 'CATEGORY BASED',
                items: [
                    {
                        label: 'City Tours',
                        description: 'Guided tours through historic cities, markets, temples, and landmarks.',
                        href: '/destinations/city-tours',
                    },
                    {
                        label: 'Mountain Tours',
                        description: 'Scenic mountain regions, hill stations, and Himalayan viewpoints.',
                        href: '/destinations/mountain-tours',
                    },
                ],
            },
        ],
    },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'About Us', href: '/about' },
];
