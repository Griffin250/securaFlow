import React from "react";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import NotFoundAnimation from "../../components/ui/NotFoundAnimation.json";
import '../../../src/index.css' // Import your CSS file here
const NotFound = () => {
  const scrollToTop = ()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-4 ">
      {/* Lottie Animation */}
      <div className="w-full max-w-xs md:max-w-lg lg:max-w-xl">
        <Lottie
          animationData={NotFoundAnimation}
          loop={true}
          style={{ width: "100%", height: "400px" }} // Make it responsive for all screen sizes
        />
      </div>

      {/* Message */}
      <p className="text-lg md:text-xl mt-4 text-center max-w-lg w-auto">
        Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
      </p>

      {/* Contact & Back to Home */}
      <div className="mt-6 text-center">
        <p className="text-sm md:text-base">
          Feel free to <span className="font-bold text-orange-600">contact Me</span>  if you need help, or
        </p>
        <NavLink onClick={scrollToTop}
          to="/"
          className="inline-block mt-4 px-6 py-2 bg-orange-600 text-white text-sm md:text-base font-medium rounded-md shadow hover:bg-orange-900 transition duration-300"
        >
          Go Back to Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
