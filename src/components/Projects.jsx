import planb from "../images/planb_projekt.png";
import planb_color from "../images/planb_projekt_color.png";
import nippon from "../images/nippon_projekt.png";
import nippon_color from "../images/nippon_projekt_color.png";
import neptun from "../images/neptun_projekt.png";
import neptun_color from "../images/neptun_projekt_color.png";
import troejborg from "../images/troejborg_projekt.png";
import troejborg_color from "../images/troejborg_projekt_color.png";
import designelementer from "../images/designelementer_projekt.png";
import designelementer_color from "../images/designelementer_projekt_color.png";
import waves_project_large from "../images/waves_project_large.png";
import waves_project_small from "../images/waves_project_page_small.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track which project image is hovered over
  const [scrolledIndex, setScrolledIndex] = useState(null); // State to track which project image is currently in view when scrolling
  const imageRefs = useRef([]); // Ref to hold references to the project images

  // Function to handle scroll events and update scrolledIndex based on viewport position of images
  const handleScroll = () => {
    if (window.innerWidth < 768) {
      imageRefs.current.forEach((ref, index) => {
        const rect = ref.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setScrolledIndex(index);
        }
      });
    }
  };

  // Effect to add scroll event listener on component mount and clean up on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Array of images with their default and hover states, along with class names and link
  const images = [
    { default: planb, hover: planb_color, className: "flower_planb" },
    { default: nippon, hover: nippon_color, className: "flower_nippon" },
    { default: neptun, hover: neptun_color, className: "flower_neptun" },
    {
      default: troejborg,
      hover: troejborg_color,
      className: "flower_troejborg",
    },
    {
      default: designelementer,
      hover: designelementer_color,
      className: "flower_designelementer",
      link: "#designelements", // Link for Design Elements project
    },
  ];

  // Function to determine scroll position based on screen width
  const getScrollPosition = () => {
    if (window.innerWidth <= 412) {
      return 4000; // Scroll position for screens smaller than or equal to 768px
    } else if (window.innerWidth <= 768) {
      return 5000; // Scroll position for medium screens
    }
    return 2900; // Default scroll position for larger screens
  };

  // Function to handle scrolling to a specific section based on index when a project is clicked
  const handleDesScroll = (index) => {
    let top;
    if (index === 4) {
      top = getScrollPosition(); // Get scroll position based on screen width for Design Elements project
    } else {
      top = 0; // Default scroll position for other indices
    }
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section>
      <h1>
        multimediedesign
        <br />
        projekter
      </h1>
      <p className="p_design_frontend">design + frontend</p>
      <div className="project_flex">
        {images.map((image, index) => (
          <div key={index}>
            {/* Unique key for each child in a list */}
            {index === 4 ? ( // Assuming "designelementer" is at index 4
              <NavLink to="/" onClick={() => handleDesScroll(index)}>
                {/* Link for Design Elements project */}
                <div
                  ref={(el) => (imageRefs.current[index] = el)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="image-wrapper"
                >
                  <img
                    src={
                      hoveredIndex === index || scrolledIndex === index
                        ? image.hover
                        : image.default
                    }
                    alt="Billedlink"
                    className={`project-image ${image.className}`}
                  />
                </div>
              </NavLink>
            ) : (
              <NavLink
                to={`/project_${index}`}
                onClick={() => handleDesScroll(0)} // Link to other projects
              >
                <div
                  ref={(el) => (imageRefs.current[index] = el)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="image-wrapper"
                >
                  <img
                    src={
                      hoveredIndex === index || scrolledIndex === index
                        ? image.hover
                        : image.default
                    }
                    alt="Billedlink"
                    className={`project-image ${image.className}`}
                  />
                </div>
              </NavLink>
            )}
          </div>
        ))}
      </div>
      {/* Carousel container for small wave images */}
      <div className="carousel_small">
        <div className="carousel">
          <div className="carousel-inner">
            <img className="carousel-item" src={waves_project_small} alt="" />
            <img className="carousel-item" src={waves_project_small} alt="" />
            <img className="carousel-item" src={waves_project_small} alt="" />
          </div>
        </div>
      </div>
      {/* Carousel container for large wave images */}
      <div className="carousel_large">
        <div className="carousel">
          <div className="carousel-inner">
            <img className="carousel-item" src={waves_project_large} alt="" />
            <img className="carousel-item" src={waves_project_large} alt="" />
            <img className="carousel-item" src={waves_project_large} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
