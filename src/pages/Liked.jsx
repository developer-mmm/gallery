import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeLikedImage } from "../app/likedSlice";
import { Link } from "react-router-dom";

function Liked() {
  const dispatch = useDispatch();
  const likedImages = useSelector((state) => state.liked);

  const handleUnlike = (image) => {
    dispatch(removeLikedImage(image));
  };

  return (
    <div>
      <div className="flex fixed top-0 left-0 right-0 pt-2  bg-white z-10 justify-between mb-12">
        <Link className="text-red-600 ml-6 text-xl font-bold" to="/gallery">
          Gallery
        </Link>
        <h1 className="text-lime-600 font-bold text-3xl">Liked</h1>
        <Link className="text-blue-600 mr-6 text-xl font-bold" to="/">
          Home
        </Link>
      </div>
      <div className="grid grid-cols-2 mt-6 gap-4 md:grid-cols-4">
        {likedImages.length === 0 ? (
          <p className="col-span-2 md:col-span-4 text-4xl text-center mt-60">
            No liked images yet. ❤️
          </p>
        ) : (
          likedImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                className="h-96 max-w-96 min-w-80 pr-2 hover:scale-105 rounded-xl object-cover object-center"
                src={image}
                alt="liked-photo"
              />
              <button
                onClick={() => handleUnlike(image)}
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
              >
                Unlike
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Liked;
