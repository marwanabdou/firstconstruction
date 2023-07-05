import { building, stoneresidence } from "../assets";

const products = [
  {
    id: 1,
    name: 'Stone Residence',
    href: stoneresidence,
    price: 'Industrial',
    imageSrc: 'https://i.ibb.co/tCfVky2/carosel-3.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Mountain View',
    href: stoneresidence,
    price: 'Industrial',
    imageSrc: 'https://i.ibb.co/tCfVky2/carosel-3.png',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Shajaret Al Durr',
    href: stoneresidence,
    price: 'Industrial',
    imageSrc: 'https://i.ibb.co/tCfVky2/carosel-3.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Emaar',
    href: stoneresidence,
    price: 'Commercial',
    imageSrc: 'https://i.ibb.co/tCfVky2/carosel-3.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Point 90',
    href: stoneresidence,
    price: 'Commercial',
    imageSrc: 'https://i.ibb.co/tCfVky2/carosel-3.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: 'Al Rashid',
    href: stoneresidence,
    price: 'Commercial',
    imageSrc: 'https://i.ibb.co/tCfVky2/carosel-3.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
];

const Catalog = () => (
  <div id="Projects">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 m-20">
      <h2 className="mb-4 text-7xl tracking-tight font-extrabold text-black text-center">
        Our Portfolio
      </h2>
      <p className="text-base text-gray-700 md:text-lg mb-10 text-center">
        It’s a challenge to condense 10+ years of projects into just a few, but these are some of
        the highlights.
      </p>
      {/* <img className="mb-20" src={building} alt="stone" /> */}

      <h2 className="text-5xl font-bold mb-10 text-black">Industrial Projects</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products
          .filter((product) => product.price === "Industrial")
          .map((product) => (
            <a
              key={product.id}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>

              <h3 className="mt-4 text-3xl font-large text-black">{product.name}</h3>
              <p className="mt-2 text-sm text-black">{product.price}</p>
            </a>
          ))}
      </div>

      <h2 className="text-5xl font-bold mt-10 mb-10 text-black">Commercial Projects</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products
          .filter((product) => product.price === "Commercial")
          .map((product) => (
            <a
              key={product.id}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>

              <h3 className="mt-4 text-3xl font-large text-black">{product.name}</h3>
              <p className="mt-2 text-sm text-black">{product.price}</p>
            </a>
          ))}
      </div>

      <div className="flex justify-center mt-8"></div>
    </div>
  </div>
);

export default Catalog;
