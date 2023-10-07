const products = [{
    id: 'product1',
    image: 'img/p1-removebg-preview.png',
    name: 'Classic Oversized White Tee',
    pricePeso: 460,
    description: 'Elevate your basics with our Classic Oversized White Tee. This timeless piece is designed for maximum comfort and style. Its relaxed fit and soft, breathable fabric make it a versatile addition to your wardrobe. Whether you are pairing it with jeans or leggings, this tee is perfect for a clean, minimalist look.'
}, {
    id: 'product2',
    image: 'img/p3-removebg-preview.png',
    name: 'Graphic Oversized Tee - Urban Streetwear Edition',
    pricePeso: 480,
    description: ' Make a statement with our Graphic Oversized Tee from the Urban Streetwear Edition. Featuring bold and edgy designs, this tee adds a dose of personality to your outfit. The oversized fit adds a streetwear-inspired vibe while the premium cotton ensures comfort. Express yourself with this trendy piece.'
}, {
    id: 'product3',
    image: 'img/p5-removebg-preview (1).png',
    name: 'Vintage Oversized T-Shirt - Retro Revival Collection',
    pricePeso: 500,
    description: 'Step back in time with our Vintage Oversized T-Shirt from the Retro Revival Collection. Designed to capture the essence of the past, this tee is perfect for those who appreciate a touch of nostalgia. The relaxed, oversized fit and distressed print create a vintage look that is effortlessly cool.'
}, {
    id: 'product4',
    image: 'img/p6-removebg-preview (1).png',
    name: 'Oversized Hooded T-Shirt Dress - Athleisure Comfort',
    pricePeso: 470, 
    description: 'Stay comfy and stylish with our Oversized Hooded T-Shirt Dress. This versatile piece combines the relaxed feel of an oversized tee with the convenience of a dress. It is perfect for running errands, lounging at home, or dressing up with sneakers and accessories for a sporty-chic look.'
}, {
    id: 'product5',
    image: 'img/p7-removebg-preview.png',
    name: 'Oversized Pocket Tee - Everyday Elegance',
    pricePeso: 470,
    description: 'Elevate your everyday look with our Oversized Pocket Tee. The oversized fit and subtle pocket detail add a touch of sophistication to this casual piece. Whether you are pairing it with leggings or a skirt, it is the perfect choice for effortless elegance.'
}, {
    id: 'product6',
    image: 'img/p8-removebg-preview.png',
    name: ' Oversized Longline T-Shirt - Street Style Vibes',
    pricePeso: 470, 
    description: 'Embrace street style vibes with our Oversized Longline T-Shirt. The elongated silhouette and generous fit create a trendy and urban look. Pair it with ripped jeans or joggers for an effortlessly cool outfit that is perfect for the city streets.'
}, {
    id: 'product7',
    image: 'img/p9-removebg-preview.png',
    name: 'Vintage-Inspired Retro Tee - Nostalgia Series',
    pricePeso: 470, 
    description: 'Take a trip down memory lane with our Vintage-Inspired Retro Tee from the Nostalgia Series. Designed to capture the essence of bygone eras, this tee is perfect for those who appreciate a touch of vintage charm. The soft, pre-washed fabric offers a comfortable, worn-in feel from day one. Step back in time with this classic piece.'
}, {
    id: 'product8',
    image: 'img/p10-removebg-preview__1_-removebg-preview.png',
    name: 'Classic Cotton Crewneck T-Shirt',
    pricePeso: 470,
    description: 'Elevate your everyday style with our Classic Cotton Crewneck T-Shirt. Crafted from premium, breathable cotton, this timeless tee offers both comfort and versatility. Whether you are dressing it up with a blazer or keeping it casual with jeans, it is the perfect addition to your wardrobe. Available in a range of colors to suit your mood and personality.'
}];

localStorage.setItem('productData', JSON.stringify(products));

