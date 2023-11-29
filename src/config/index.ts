export const PRODUCT_CATEGORIES = [
    {
        label: 'UI Kits',
        value : 'ui-kits' as const,
        feature : [
            {
                name:'Editor picks',
                href:'#',
                imageSrc:'/nav/ui-kits/mixed.jpg'
            },
            {
                name:'New Arivals',
                href:'#',
                imageSrc:'/nav/ui-kits/blue.jpg'
            },
            {
                name:'Best Seller',
                href:'#',
                imageSrc:'/nav/ui-kits/purple.jpg'
            },
        ],
    },
    {
        label: 'Icons',
        value : 'icons' as const,
        feature : [
            {
                name:'Favorite Icons Picks',
                href:'#',
                imageSrc:'/nav/icons/picks.jpg'
            },
            {
                name:'New Arivals',
                href:'#',
                imageSrc:'/nav/icons/new.jpg'
            },
            {
                name:'Best Selling Icons',
                href:'#',
                imageSrc:'/nav/icons/bestsellers.jpg'
            },
        ],
    },
]