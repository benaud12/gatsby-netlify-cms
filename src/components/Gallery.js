import React from "react"
import ImageGallery from "react-image-gallery"

const images = [
  {
    original: "/images/apartment-waltraud-winter.jpg",
    thumbnail: "/images/apartment-waltraud-winter.jpg",
    description: "Apartment Waltraud in winter",
  },
  {
    original: "/images/apartment-waltraud-summer.jpg",
    thumbnail: "/images/apartment-waltraud-summer.jpg",
    description: "Apartment Waltraud in summer"
  },
  {
    original: "/images/apartment-waltraud-balcony-view.jpg",
    thumbnail: "/images/apartment-waltraud-balcony-view.jpg",
    description: "View from the balcony"
  },
  {
    original: "/images/apartment-waltraud-bedroom.jpg",
    thumbnail: "/images/apartment-waltraud-bedroom.jpg",
    description: "Double bedroom"
  },
  {
    original: "/images/apartment-waltraud-living-room.jpg",
    thumbnail: "/images/apartment-waltraud-living-room.jpg",
    description: "Living room / kitchen with double sofa bed"
  },
  {
    original: "/images/apartment-waltraud-kitchen.jpg",
    thumbnail: "/images/apartment-waltraud-kitchen.jpg",
    description: "View of kitchen in living room / kitchen area"
  },
  {
    original: "/images/ramsau-ski-run.jpg",
    thumbnail: "/images/ramsau-ski-run.jpg",
    description: "Ramsau Ski Run"
  },
  {
    original: "/images/ramsau-parade-cow.jpg",
    thumbnail: "/images/ramsau-parade-cow.jpg",
    description: "Cow at the Ramsau Parade"
  },
  {
    original: "/images/rittisberg.jpg",
    thumbnail: "/images/rittisberg.jpg",
    description: "View from the Rittisberg"
  },
  {
    original: "/images/ramsau-ski-school.jpg",
    thumbnail: "/images/ramsau-ski-school.jpg",
    description: "Ramsau Ski School"
  },
  {
    original: "/images/ramsau-parade-horse-and-cart.jpg",
    thumbnail: "/images/ramsau-parade-horse-and-cart.jpg",
    description: "Horse & Cart at the Ramsau Parade"
  },
];

export const Gallery = () => (
  <div className="gallery-container">
    <ImageGallery
      items={images}
      lazyLoad={true}
    />
  </div>
)
