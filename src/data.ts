type Product = {
   id: number;
   title: string;
   desc?: string;
   img?: string;
   price: number;
   options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
   {
      id: 2,
      title: "Cheesecake",
      desc: "A tantalizing treat featuring a buttery crust, a velvety filling of citrus-infused cottage cheese, adorned with a medley of berries or homemade caramel.",
      img: "/products/cheesecake.jpg",
      price: 13.5,
      options: [
         {
            title: "Classic",
            additionalPrice: 0,
         },
         {
            title: "Caramel",
            additionalPrice: 0.5,
         },
      ],
   },
   {
      id: 3,
      title: "Meringue roll",
      desc: "An enchanting blend of light meringue and delicate filling, highlighted by a crisp outer meringue layer and a creamy, fruity center, adorned with blueberries and strawberries.",
      img: "/products/maringue-roll.jpg",
      price: 7,
      options: [
         {
            title: "0.5kg",
            additionalPrice: 0,
         },
         {
            title: "1kg",
            additionalPrice: 7,
         },
      ],
   },
   {
      id: 4,
      title: "Honey Cake",
      desc: "Thin honey-kissed layers, embracing a velvety symphony of buttery cream and sour cream, generously studded with the delightful crunch of walnuts.",
      img: "/products/honey-cake.jpg",
      price: 13.5,
      options: [
         {
            title: "Classic",
            additionalPrice: 0,
         },
         {
            title: "Caramel",
            additionalPrice: 0.5,
         },
      ],
   },
   {
      id: 5,
      title: "Napoleon Cake",
      desc: "Delicate puff pastry layers, enriched with a luscious blend of custard and cream. Enjoy it in its classic form or experience a variation with the homemade caramel.",
      img: "/products/napoleon.jpg",
      price: 13.5,
      options: [
         {
            title: "Classic",
            additionalPrice: 0,
         },
         {
            title: "Caramel",
            additionalPrice: 0.5,
         },
      ],
   },
];

export const products: Products = [
   {
      id: 1,
      title: "Bento Cake",
      desc: "A small masterpiece that redefines sweetness, harmonizing flavors and textures to bring pure joy in every bite. The cake is available in either the classic round shape or heart-shaped.",
      img: "/products/bento.jpg",
      price: 13.5,
      options: [
         {
            title: "Classic",
            additionalPrice: 0,
         },
         {
            title: "Heart",
            additionalPrice: 1.5,
         },
      ],
   },
   {
      id: 2,
      title: "Bento and Cupcakes",
      desc: "Experience the perfect blend of flavors with our Bento Cake and a delightful selection of six cupcakes. Personalized message, elegant gift wrapping, and card are all included. Cupcakes can be either chocolate or vanilla flavored.",
      img: "/products/bento-cupcakes-pink.jpg",
      price: 25,
      options: [
         {
            title: "Vanilla",
            additionalPrice: 0,
         },
         {
            title: "Choco",
            additionalPrice: 0,
         },
      ],
   },
   {
      id: 3,
      title: "Bento and Macarons",
      desc: "Indulge in a duo of delights, combining the classic charm of our Bento Cake with delicate macarons. A symphony of flavors elegantly presented in two forms – circles and hearts.",
      img: "/products/bento-macarons.jpg",
      price: 16.5,
      options: [
         {
            title: "Classic",
            additionalPrice: 0,
         },
         {
            title: "Heart",
            additionalPrice: 1.5,
         },
      ],
   },
   {
      id: 4,
      title: "Cupcakes Choco",
      desc: "Savor 6 delightful chocolate cupcakes, each filled with either chocolate or cappuccino cream. Complete with packaging and decorations, our Cupcakes Choco are a taste and visual delight in one. Perfect as a treat or a thoughtful gift.",
      img: "/products/cupcakes-choco.jpg",
      price: 16.5,
      options: [
         {
            title: "Choco",
            additionalPrice: 0,
         },
         {
            title: "Capp",
            additionalPrice: 0,
         },
      ],
   },
   {
      id: 5,
      title: "Cupcakes Vanilla",
      desc: "Indulge in 6 delightful vanilla cupcakes, each filled with your choice of strawberry jam or white chocolate. Complete with packaging and decor, Our Cupcakes Vanilla provide a sensory delight, ideal for savoring alone or sharing as a considerate gift.",
      img: "/products/cupcakes-v.jpg",
      price: 16.5,
      options: [
         {
            title: "Strawb",
            additionalPrice: 0,
         },
         {
            title: "Choco",
            additionalPrice: 0,
         },
      ],
   },
   {
      id: 6,
      title: "Strawberry Cake",
      desc: "Experience the epitome of refinement with these delicate sponge cakes, artfully imbued with the richness of cream and the warmth of vanilla. Layer upon layer, they embrace sumptuous strawberry mousse and a tantalizing strawberry confit.",
      img: '/products/cake-strawberry.JPG',
      price: 12,
      options: [
         {
            title: "2kg",
            additionalPrice: 0,
         },
         {
            title: "3kg",
            additionalPrice: 6,
         },
         {
            title: "4kg",
            additionalPrice: 12,
         },
      ],
   },
   {
      id: 7,
      title: "Berry Ice-cream Cake",
      desc: "Indulge in the elegance of delicate sponge cakes infused with luscious cream and fragrant vanilla, layered with tantalizing raspberry and strawberry mousse, all crowned with a velvety chocolate ganache.",
      img: "/products/cake-berry.JPG",
      price: 12,
      options: [
         {
            title: "2kg",
            additionalPrice: 0,
         },
         {
            title: "3kg",
            additionalPrice: 6,
         },
         {
            title: "4kg",
            additionalPrice: 12,
         },
      ],
   },
   {
      id: 8,
      title: "Truffle Cake",
      desc: "Revel in the contrast as you savor the indulgent truffle cream atop rich dark chocolate, followed by the velvety embrace of truffle vanilla cream. The ensemble concludes with a sumptuous chocolate ganache.",
      img: "/products/cake-truffle.JPG",
      price: 15,
      options: [
         {
            title: "2kg",
            additionalPrice: 0,
         },
         {
            title: "3kg",
            additionalPrice: 7.5,
         },
         {
            title: "4kg",
            additionalPrice: 15,
         },
      ],
   },
   {
      id: 9,
      title: "Three Chocolate Cake",
      desc: "Indulge in the pleasure of chocolate biscuit layers delicately soaked, adorned with velvety mousses in white, milk, and dark chocolate, and elegantly crowned with a rich chocolate ganache.",
      img: "/products/cake-chocolate.JPG",
      price: 13.5,
      options: [
         {
            title: "2kg",
            additionalPrice: 0,
         },
         {
            title: "3kg",
            additionalPrice: 6.75,
         },
         {
            title: "4kg",
            additionalPrice: 13.5,
         },
      ],
   },
   {
      id: 10,
      title: "Lemon-blueberry Cake",
      desc: "Indulge in the exquisite delight of delicate lemon-infused sponge cakes, beautifully layered with vibrant blueberry confit and zesty lemon mousse, perfectly crowned with a luscious chocolate ganache.",
      img: "/products/cake-lemon_blueberry.JPG",
      price: 13.5,
      options: [
         {
            title: "2kg",
            additionalPrice: 0,
         },
         {
            title: "3kg",
            additionalPrice: 6.75,
         },
         {
            title: "4kg",
            additionalPrice: 13.5,
         },
      ],
   },
   {
      id: 11,
      title: "Oreo Cake",
      desc: "Immerse yourself in the elegance of tender chocolate-infused biscuit cakes. Embracing a velvety cream cheese mousse and the irresistible allure of 'Oreo' cookies, this creation culminates with a luxurious chocolate ganache atop.",
      img: "/products/cake-oreo.JPG",
      price: 13,
      options: [
         {
            title: "2kg",
            additionalPrice: 0,
         },
         {
            title: "3kg",
            additionalPrice: 6.5,
         },
         {
            title: "4kg",
            additionalPrice: 13,
         },
      ],
   },
   {
      id: 12,
      title: "Snickers Cake",
      desc: "Delve into the luxurious world of chocolate biscuit cakes, , layered with velvety chocolate mousse, a delightful homemade caramel with peanuts, and crowned with a lavish chocolate ganache.",
      img: "/products/cake-snickers.JPG",
      price: 15,
      options: [
         {
            title: "2kg",
            additionalPrice: 0,
         },
         {
            title: "3kg",
            additionalPrice: 7.5,
         },
         {
            title: "4kg",
            additionalPrice: 15,
         },
      ],
   },
];


type Menu = {
   id: number;
   slug: string;
   title: string;
   desc?: string;
   img: string;
   text: string;
   color: string;
}[];

export const menu: Menu = [
   {
      id: 1,
      slug: "cakes",
      title: "Holiday Cakes",
      desc: "Elevate your festivities with our exquisite cakes, meticulously crafted to transform moments into cherished memories.",
      img: "/products/cake-bg.png",
      text: "zinc-500",
      color: "zinc-100",
   },
   {
      id: 2,
      slug: "bento",
      title: "Mini masterpiece",
      desc: "Elevate your celebrations with joy by savoring our delicate bento cake, a true masterpiece of taste and design.",
      img: "/products/bento-bg.png",
      text: "white",
      color: "zinc-500",
   },
   {
      id: 3,
      slug: "cupcakes",
      title: "Divine Cupcakes",
      desc: "Gift a special person with an exquisite assortment of cupcakes, blending delicate textures and a diverse array of flavors.",
      img: "/products/cupcakes-bg.png",
      text: "zinc-500",
      color: "zinc-100",
   },
];
