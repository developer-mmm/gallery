import React, { useState } from "react";
import { useFirestore } from "../hooks/useFirestore";
import { useDispatch } from "react-redux";
import { addLikedImage, removeLikedImage } from "../app/likedSlice";
import ModalDialog from "./ModalDialog";

function TodoList({ todos }) {
  const { deleteDocument, updateDocument } = useFirestore();
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [likedTodos, setLikedTodos] = useState([]);
  const dispatch = useDispatch();

  const handleCardClick = (todo) => {
    setSelectedTodo(todo);
    document.getElementById("my_modal_1").showModal();
  };

  const handleSave = (updatedTodo) => {
    updateDocument(updatedTodo.id, updatedTodo);
    setSelectedTodo(null);
    document.getElementById("my_modal_1").close();
  };

  const handleLike = (todo) => {
    const isLiked = likedTodos.includes(todo.id);
    if (isLiked) {
      setLikedTodos(likedTodos.filter((id) => id !== todo.id));
      dispatch(removeLikedImage(todo.title));
    } else {
      setLikedTodos([...likedTodos, todo.id]);
      dispatch(addLikedImage(todo.title));
    }
  };

  const Todos = [...todos].reverse();

  return (
    <div className="p-6">
      <ModalDialog todo={selectedTodo} handleSave={handleSave} />
      <div className="grid grid-cols-1 mt-12 md:grid-cols-3 lg:grid-cols-1 rounded-md gap-6">
        {Todos.map((todo) => (
          <div
            key={todo.id}
            className={`card rounded-lg overflow-hidden transition-transform transform ${
              todo.completed ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => handleCardClick(todo)}
          >
            <img
              src={todo.title}
              alt={todo.title}
              className="w-full h-96 object-cover mb-6 hover:scale-105 hover:cursor-pointer"
            />
            <div className="flex items-center gap-80 absolute top-2 right-2 ">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike(todo);
                }}
                className={`btn rounded-xl ${
                  likedTodos.includes(todo.id) ? "btn-danger" : "btn-success"
                } hover:bg-red-600`}
              >
                {likedTodos.includes(todo.id) ? "Unlike" : "Like"}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteDocument(todo.id, todo.title);
                }}
                className="btn btn-danger hover:bg-blue-600 rounded-xl"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
