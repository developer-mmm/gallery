import { FormInput } from "../components";
import { Form, useActionData } from "react-router-dom";
import { useFirestore } from "../hooks/useFirestore";
import { useEffect } from "react";

function FormCreate({ user }) {
  const { addNewDoc } = useFirestore();
  const userData = useActionData();
  useEffect(() => {
    if (userData) {
      const NewDoc = {
        ...userData,
        completed: userData.completed == "off" ? false : true,
        uid: user.uid,
      };
      addNewDoc(NewDoc);
    }
  }, [userData]);

  return (
    <Form
      method="post"
      className="flex flex-col items-center mt-8 ml-8 gap-5 card bg-base-100 w-96 p-5 shadow-xl"
    >
      <h1 className="text-2xl text-blue-600 font-bold">Add New Gallery</h1>
      <FormInput type="url" labelText="Enter Img Url" name="title" />
      <div className="w-full">
        <button className="btn text-xl font-sans rounded-2xl btn-info font-bold btn-block">
          ADD{" "}
        </button>
      </div>
    </Form>
  );
}

export default FormCreate;
