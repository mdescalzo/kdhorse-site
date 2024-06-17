import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Gallery: React.FC = () => {
  return (
    <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
      <div>
        <img src="gallery/image0.jpeg" alt="Photo 1" />
        {/* <p className="legend">Photo 1</p> */}
      </div>
      <div>
        <img src="gallery/image1.jpeg" alt="Photo 2" />
        {/* <p className="legend">Photo 2</p> */}
      </div>
      <div>
        <img src="gallery/image2.jpeg" alt="Photo 3" />
        {/* <p className="legend">Photo 3</p> */}
      </div>
      <div>
        <img src="gallery/image3.jpeg" alt="Photo 3" />
        {/* <p className="legend">Photo 4</p> */}
      </div>
      <div>
        <img src="gallery/image4.jpeg" alt="Photo 3" />
        {/* <p className="legend">Photo 5</p> */}
      </div>
      <div>
        <img src="gallery/image5.jpeg" alt="Photo 3" />
        {/* <p className="legend">Photo 6</p> */}
      </div>
      <div>
        <img src="gallery/IMG_3444.jpg" alt="Photo 3" />
        {/* <p className="legend">Photo 6</p> */}
      </div>
    </Carousel>
  );
};

export default Gallery;
