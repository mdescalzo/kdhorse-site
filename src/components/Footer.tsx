import React from "react";

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <img src="KD_Rider_black.png" alt="Top Left" className="top-left-image" />
      <p>
        &copy; {new Date().getFullYear()} KD Horsemanship, LLC. All rights
        reserved.
      </p>
    </section>
  );
};

export default Footer;
