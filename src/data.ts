export const navItems = [
    { label: 'Home', href: '#home' },
    {
        label: 'Destinations',
        href: '#destinations',
        children: [
            {
                group: 'TOP DESTINATIONS',
                items: [
                    {
                        label: 'All Destinations',
                        description: 'Handpicked destinations featuring mountains, cities, nature, and culture.',
                        href: '#all-destinations',
                    },
                    {
                        label: 'International Tours',
                        description: 'Carefully planned international holiday packages and tours.',
                        href: '#international-tours',
                    },
                ],
            },
            {
                group: 'CATEGORY BASED',
                items: [
                    {
                        label: 'City Tours',
                        description: 'Guided tours through historic cities, markets, temples, and landmarks.',
                        href: '#city-tours',
                    },
                    {
                        label: 'Mountain Tours',
                        description: 'Scenic mountain regions, hill stations, and Himalayan viewpoints.',
                        href: '#mountain-tours',
                    },
                ],
            },
        ],
    },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '/contact' },
    { label: 'About Us', href: '#about' },
];
