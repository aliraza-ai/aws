"use client";

import React, { useState, useEffect } from "react";

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  


  useEffect(() => {
    // Check if the user has previously consented to cookies
    const hasConsented = localStorage.getItem("cookieConsent");

    if (!hasConsented) {
      // If not, show the popup
      setShowPopup(true);
    }
  }, []);

  const handleAllowCookies = () => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);

    // Set the cookie consent in local storage
    localStorage.setItem("cookieConsent", "true");

    // Set the cookie with an expiry date
    document.cookie =
      "consent=true; expires=" + expiryDate.toUTCString() + "; path=/";

    setShowPopup(false);
  };

  const handleCancelCookies = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      
      <div className="fixed bottom-0 w-full bg-gray-900 text-white p-4 z-20">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <p className="mr-4">
            This website uses cookies to enhance user experience.
          </p>
          <div className="flex space-x-4">
            <div className="w-fit rounded-3xl p-0.5 bg-gradient-to-r from-[rgb(247,15,255,1)] to-[#2C63FF]">
              <button
                className="bg-black text-white py-2 px-2 lg:px-9 rounded-3xl hover:opacity-75 "
                onClick={handleAllowCookies}
              >
                Allow Cookies
              </button>
            </div>
            <button
              onClick={handleCancelCookies}
              className="bg-slate-500 hover:bg-black py-2 px-2 lg:px-9 rounded-3xl focus:outline-none transition duration-300 ease-in-out"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookiePopup;
