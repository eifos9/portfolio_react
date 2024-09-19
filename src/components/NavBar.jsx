import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavBar() {
  // State to hold scroll values for different sections of the page
  const [scrollValues, setScrollValues] = useState({
    projekter: 200,
    om: 1500,
    kontakt: 900,
    designmanual: 3000,
  });

  // Function to update scroll values based on viewport width
  const updateScrollValues = () => {
    const width = window.innerWidth;

    // Set scroll values based on screen size
    if (width <= 412) {
      setScrollValues({
        projekter: 180, // Value for smaller screens
        om: 1650,
        kontakt: 1300,
        designmanual: 4000,
      });
    } else if (width <= 768) {
      setScrollValues({
        projekter: 200, // Value for smaller screens
        om: 2300,
        kontakt: 1700,
        designmanual: 4900,
      });
    } else {
      setScrollValues({
        projekter: 200, // Original values for larger screens
        om: 1500,
        kontakt: 900,
        designmanual: 3000,
      });
    }
  };

  // Update scroll values on component mount and when window is resized
  useEffect(() => {
    updateScrollValues(); // Set initial scroll values

    window.addEventListener("resize", updateScrollValues); // Add event listener to update values on resize

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScrollValues);
    };
  }, []);

  // Function to smoothly scroll to a specific position on the page
  const handleScroll = (top) => {
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav>
      <NavLink to="/" onClick={() => handleScroll(scrollValues.projekter)}>
        {/* Link to 'projekter' section */}
        <p className="p_nav_projekter">projekter</p>
      </NavLink>
      <NavLink to="/" onClick={() => handleScroll(scrollValues.om)}>
        {/* Navigation text for 'om' */}
        <p className="p_nav_om">om</p>
      </NavLink>
      <NavLink to="/" onClick={() => handleScroll(scrollValues.kontakt)}>
        {/* Navigation text for 'om' */}
        <p className="p_nav_kontakt">kontakt</p>
      </NavLink>
      <NavLink to="/" onClick={() => handleScroll(scrollValues.designmanual)}>
        {/* Link to 'designmanual' section */}
        <p className="p_nav_designmanual">designelementer</p>
      </NavLink>
    </nav>
  );
}
