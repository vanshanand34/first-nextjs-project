'use client'

import Image from "next/image";
import { useState } from "react"
import Image1 from "@assets/glow-spaceship.avif";
import Image2 from "@assets/man-in-space.jpg";
import Image3 from "@assets/some-planet.png";
import Image4 from "@assets/shivji-image.jpg";
import Footer from "./footer";

const Home = () => {

  const [currImage, setCurrImage] = useState(1);
  const numberOfImages = 3;

  const displayHideImage = (indexToDisplay: number, indexToHide: number) => {
    document.getElementById(`image-${indexToDisplay}`)?.classList.remove("hidden");
    document.getElementById(`image-${indexToHide}`)?.classList.add("hidden");
    const dotToDisplay = document.getElementById(`dot-${indexToDisplay}`);
    const dotToHide = document.getElementById(`dot-${indexToHide}`)

    dotToDisplay?.classList.add("bg-black");
    dotToDisplay?.classList.remove("bg-white");
    dotToHide?.classList.add("bg-white");
    dotToHide?.classList.remove("bg-black");
  }


  const showNextImage = () => {
    displayHideImage((currImage % numberOfImages) + 1, currImage);
    setCurrImage(num => (num % numberOfImages) + 1);
  }

  const showPrevImage = () => {
    const imageToDisplay = (currImage == 1) ? numberOfImages : (currImage - 1);
    const imageToHide = currImage;
    displayHideImage(imageToDisplay, imageToHide);
    setCurrImage(num => (num - 1 || numberOfImages));
  }

  const setImageFromDot = (index: number) => {
    displayHideImage(index, currImage);
    setCurrImage(index);
  }

  return (
    <div className="flex">
      <div className="image" id="image-1">
        <Image
          src={Image2}
          style={{
            width: "100vw",
            height: "100vh",
            minWidth: "100vw",
            objectFit: "cover"
          }}
          alt="Space picture"
        ></Image>
      </div>
      <div className="image hidden" id="image-2">
        <Image
          src={Image3}
          style={{
            width: "100vw",
            height: "100vh",
            minWidth: "100vw",
            objectFit: "cover"
          }}
          alt="Space picture"
        ></Image>
      </div>
      <div className="image hidden" id="image-3">
        <Image
          src={Image4}
          style={{
            width: "100vw",
            height: "100vh",
            minWidth: "100vw",
            objectFit: "cover"
          }}
          alt="Space picture"
        ></Image>
      </div>
      <button
        className="absolute top-[46%] left-[5%] bg-black shadow-[3px_5px_18px_rgb(255,255,255,0.3)] text-white rounded-full md:py-2 md:px-5 py-1 px-3 text-xl md:text-3xl hover:bg-white hover:text-black font-[family-name:var(--font-geist-mono)]"
        onClick={showPrevImage}

      >&#10094;
      </button>
      <button
        className="absolute top-[46%] right-[5%] bg-black shadow-[3px_5px_18px_rgb(255,255,255,0.3)] text-white rounded-full md:px-5 md:py-2 py-1 px-3 text-xl md:text-3xl hover:bg-white hover:text-black font-[family-name:var(--font-geist-mono)]"
        onClick={showNextImage}
      >&#10095;
      </button>
      <Footer count={3} handler={setImageFromDot} />
    </div>
  );
}

export default Home;
