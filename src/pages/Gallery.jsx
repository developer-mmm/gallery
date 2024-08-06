import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLikedImage, removeLikedImage } from "../app/likedSlice";
import { Link } from "react-router-dom";
export function Gallery() {
  const dispatch = useDispatch();
  const likedImages = useSelector((state) => state.liked);

  const handleLike = (image) => {
    if (likedImages.includes(image)) {
      dispatch(removeLikedImage(image));
    } else {
      dispatch(addLikedImage(image));
    }
  };

  const images = [
    "https://th.bing.com/th/id/OIP.lykAMlpR8l_nR1yQUioNnQHaEK?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.X5YRj4n3U3bmrH2Ja8HwGQHaEo?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.Exdn9C-42ZQUcogH-u5xMAHaEx?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.vfw_m5kHDKGn7SD_yvW3XQHaE8?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.kckG0-TSBOapImu_oP1sqAHaEL?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.yk9yI2s31OS3P_12nN9DXwHaEK?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.xVCU51t3HzxS9giZBOuLQgHaEK?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.JPllmkWBqX_ALvUO_DAnZwHaE7?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.4Ln_M6IwIv9Icg-J56nV0wHaE8?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIF.cuL1oWXY3gsHepBH33DvTg?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.J1CLSlpCUn7wO4iLZoMZ0AHaE8?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIF.f2vDSIKvF2zOdrBBnovjQg?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.c1XsWKEFfcPFZidEsSVvOAHaEn?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.Ksl2-IELwwDGwJytq11AmQHaEK?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.wOgfNymmesMQ74fKxOXqhgHaE8?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.uR-Aj0rd-lcDtZg9xEcitQHaE8?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.4NSdAyHhHFdNFwwG1Fo9eQHaEK?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP._gPWltB6wwknn6_syte4eQHaEo?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIF.EgZCd7ujc4aTEshoQ1vpYQ?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.5WcAjZ0GwTXNTAMCtWrcewHaEK?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIF.wReZlm81AwHBQUOA3QFjbA?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.VzdTOOEZuttO4eH7UqHkUgHaEo?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.bhErQpxAD7PfYqLTVf9c2wHaEo?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.JrCUB0sijbBSOAASOr2T_AHaE7?w=305&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  ];

  return (
    <div>
      <div className="flex fixed top-0 left-0 right-0 pt-2  bg-white z-10 justify-between mb-12">
        <Link className="text-red-600 ml-6 text-xl font-bold" to="/liked">
          Liked
        </Link>
        <h1 className="text-lime-600 font-bold text-3xl">Gallery</h1>
        <Link className="text-blue-600 mr-6 text-xl font-bold" to="/">
          Home
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              className="h-auto max-w-full rounded-lg hover:scale-105 object-cover object-center"
              src={image}
              alt="gallery-photo"
            />
            <button
              onClick={() => handleLike(image)}
              className={`absolute top-2 right-2 p-2 rounded-full  shadow-md ${
                likedImages.includes(image) ? "bg-red-500" : "bg-white"
              }`}
            >
              {likedImages.includes(image) ? "Unlike" : "Like"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

