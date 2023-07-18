import { building,  stoneresidence, building4, DyarLuxuryToilet, BuroujVilla, SquareApartement, MadinatyVilla, MountainViewIvilla, MountainView3, StoneResidenceApartement,   ElSheroukVilla, MadinatyLandscape, DyarLandscape, hydeparkfront, Mountainviewfront, stoneresidencefront , DeyarLandscape1, DeyarLandscape2 ,MadinatyLandscape2 ,SheroukVilla ,MadinatyVilla2 ,MVilla ,SquareCompoundApartement, Borouj  } from "../assets";

const products = [
  {
    id: 1,
    name: 'Al Burouj Villa',
    href: BuroujVilla,
    price: 'Residential',
    imageSrc: Borouj,
    imageAlt: 'Al Burouj Villa',
  },
  {
    id: 2,
    name: 'Square Apartement',
    href: SquareApartement,
    price: 'Residential',
    imageSrc: SquareCompoundApartement,
    imageAlt: 'Square Apartement',
  },
  {
    id: 3,
    name: 'Madinaty Villa',
    href: MadinatyVilla,
    price: 'Residential',
    imageSrc: MadinatyVilla2,
    imageAlt: 'Madinaty Villa',
  },
  {
    id: 4,
    name: 'Mountain View I Villa',
    href: MountainViewIvilla,
    price: 'Residential',
    imageSrc: Mountainviewfront,
    imageAlt: 'Mountain View I Villa',
  },
  {
    id: 5,
    name: 'Mountain View Villa',
    href: MountainView3,
    price: 'Residential',
    imageSrc: MVilla,
    imageAlt: 'Mountain View Villa',
  },
  {
    id: 6,
    name: 'Stone Residence Apartement',
    href: StoneResidenceApartement,
    price: 'Residential',
    imageSrc: stoneresidencefront,
    imageAlt: 'Stone Residence Apartement',
  },
  {
    id: 7,
    name: 'El Sherouk Villa',
    href: ElSheroukVilla,
    price: 'Residential',
    imageSrc: SheroukVilla,
    imageAlt: 'El Sherouk Villa',
  },
  {
    id: 8,
    name: 'Madinaty Landscape',
    href: MadinatyLandscape,
    price: 'Residential Landscape',
    imageSrc: MadinatyLandscape2,
    imageAlt: 'Madinaty Landscape',
  },
  {
    id: 9,
    name: 'Dyar Landcape',
    href: DyarLandscape,
    price: 'Residential Landscape',
    imageSrc: DeyarLandscape2,
    imageAlt: 'Dyar Landcape',
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

      <h2 className="text-5xl font-bold mb-10 text-black">Residential Projects</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products
          .filter((product) => product.price === "Residential")
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

      <h2 className="text-5xl font-bold mt-10 mb-10 text-black">Residential Landscape Projects</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products
          .filter((product) => product.price === "Residential Landscape")
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
