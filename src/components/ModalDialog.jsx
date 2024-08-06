import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLikedImage, removeLikedImage } from "../app/likedSlice";

function ModalDialog({ todo, handleSave }) {
  const [isEditing] = useState(false);
  const [newTitle] = useState(todo ? todo.title : "");
  const [setImageURL] = useState(todo ? todo.title : "");
  const dispatch = useDispatch();
  const likedImages = useSelector((state) => state.liked);

  useEffect(() => {
    if (isEditing) {
      setImageURL(newTitle);
    }
  }, [newTitle, isEditing]);

  if (!todo) return null;

  const isLiked = likedImages.includes(todo.title);

  const handleLikeToggle = () => {
    if (isLiked) {
      dispatch(removeLikedImage(todo.title));
    } else {
      dispatch(addLikedImage(todo.title));
    }
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="w-full">
          <img src={todo.title} alt="Picture" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Awesome!
            <div className="badge badge-secondary">NEW PICTURE</div>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing!</p>
          <div className="card-actions justify-end">
            <button
              onClick={handleLikeToggle}
              className={`btn ${
                isLiked ? "btn-danger" : "btn-info"
              } -mr-8 text-xl mt-4 w-96 dark:text-red-600`}
            >
              {isLiked ? "Unlike" : "Liked"}
            </button>
          </div>
          <div className="modal-content">
            <h2>{todo.description}</h2>
            <p>{todo.description}</p>
            <button
              onClick={() => document.getElementById("my_modal_1").close()}
              className="btn btn-success w-96 text-xl -ml-8 mt-4"
            >
              back
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default ModalDialog;
