import {
  addDoc,
  collection,
  serverTimestamp,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebiseConfig";
import toast from "react-hot-toast";
import { useState } from "react";
export const useFirestore = () => {
  // Delete func;
  const deleteDocument = async (id) => {
    await deleteDoc(doc(db, "todos", id));
    toast.success("Deleted Photo");
  };

  // Add func;
  const addNewDoc = async (doc) => {
    await addDoc(collection(db, "todos"), {
      ...doc,
      createdAt: serverTimestamp(),
    });
    toast.success("New Photo Added");
  };

  //change status
  const changeStatus = async (id, status) => {
    const selectedDoc = doc(db, "todos", id);
    await updateDoc(selectedDoc, {
      completed: !status,
    });
    toast.success("Changed");
  };

  const [isPending, setIsPending] = useState(false);

  const changeTitle = async (id, newTitle) => {
    setIsPending(true);
    const selectedDoc = doc(db, "todos", id);
    await updateDoc(selectedDoc, {
      title: newTitle,
    });
    setIsPending(false);
    toast.success("Title Changed");
  };

  return { deleteDocument, addNewDoc, changeStatus, changeTitle, isPending };
};
