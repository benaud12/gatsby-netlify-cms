import React from "react"
import ImageGallery from "react-image-gallery"

const originalClass = "image-auto-scroll-image"

const images = [
  {
    original: "/images/apartment-waltraud-winter.jpg",
    originalClass,
  },
  {
    original: "/images/lake-view.jpeg",
    originalClass,
  },
  {
    original: "/images/apartment-waltraud-summer.jpg",
    originalClass,
  },
];

export const ImageAutoScroll = () => (
  <div className="image-auto-scroll-container">
    <ImageGallery
      items={images}
      lazyLoad={true}
      autoPlay={true}
      showNav={false}
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      slideDuration={1000}
      slideInterval={4000}
    />
  </div>
)
