import arrow from "../images/arrow_right.png";
import { useState } from "react";

// Prop is passed to the GalleryDesEl componement
export default function GalleryDesEl({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index

  // Function to show the next image in the gallery
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Increment index and wrap around if at the end
  };

  // Function to show the previous image in the gallery
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    ); // Decrement index and wrap around if at the beginning
  };

  return (
    <>
      <div className="slide_el_flex">
        <img
          className="arrow_left"
          src={arrow}
          alt="Venstrepil"
          onClick={prevImage}
        />
        <img
          className="designel_gallery"
          src={images[currentIndex]} // Source of the current image based on index
          alt="Galleribillede"
        />
        <img
          className="arrow_right"
          src={arrow}
          alt="Højrepil"
          onClick={nextImage}
        />
      </div>
    </>
  );
}
