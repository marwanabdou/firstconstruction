import { AlBuroujDP, StoneResidenceDP,  SquareApartementDP, MadinatyVillaDP, SheroukVillaDP, MVLuxuryAptDP, MountainViewDP, BuroujVilla, SquareApartement, MadinatyVilla, MountainViewIvilla, MountainView3, StoneResidenceApartement,   ElSheroukVilla, MadinatyLandscape, DyarLandscape, hydeparkfront, Mountainviewfront, stoneresidencefront , DeyarLandscape1, DeyarLandscape2 ,MadinatyLandscape2 ,SheroukVilla ,MadinatyVilla2 ,MVilla ,SquareCompoundApartement, Borouj, MountainViewNew  } from "../assets";

const products = [
  {
    id: 1,
    name: 'Al Burouj Villa',
    href: BuroujVilla,
    price: 'Residential',
    imageSrc: AlBuroujDP,
    imageAlt: 'Al Burouj Villa',
  },
  {
    id: 2,
    name: 'Square Apartement',
    href: SquareApartement,
    price: 'Residential',
    imageSrc: SquareApartementDP,
    imageAlt: 'Square Apartement',
  },
  {
    id: 3,
    name: 'Madinaty Villa',
    href: MadinatyVilla,
    price: 'Residential',
    imageSrc: MadinatyVillaDP,
    imageAlt: 'Madinaty Villa',
  },
  {
    id: 4,
    name: 'Mountain View I Villa',
    href: MountainViewIvilla,
    price: 'Residential',
    imageSrc: MountainViewDP,
    imageAlt: 'Mountain View I Villa',
  },
  {
    id: 5,
    name: 'Mountain View Luxury Apartment',
    href: MountainView3,
    price: 'Residential',
    imageSrc: MVLuxuryAptDP,
    imageAlt: 'Mountain View Villa',
  },
  {
    id: 6,
    name: 'Stone Residence Duplex Apartement',
    href: StoneResidenceApartement,
    price: 'Residential',
    imageSrc: StoneResidenceDP,
    imageAlt: 'Stone Residence Apartement',
  },
  {
    id: 7,
    name: 'El Sherouk Villa',
    href: ElSheroukVilla,
    price: 'Residential',
    imageSrc: SheroukVillaDP,
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
    name: 'Dyar Landscape',
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
      <h2 className="mb-10 text-7xl tracking-tight font-extrabold text-black text-center">
        Our Portfolio
      </h2>
     
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
