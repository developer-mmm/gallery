import { Form, Link, useActionData } from "react-router-dom";

import { useRegister } from "../hooks/useRegister";
import { useEffect, useState } from "react";
import { FormInput } from "../components";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  let displayName = formData.get("displayName");
  let photoURL = formData.get("photoURL");

  return { email, password, displayName, photoURL };
};

function Register() {
  const userData = useActionData();
  const { registerWithEmail, isPending } = useRegister();
  const [errors, setErrors] = useState({
    email: "",
    displayName: "",
    photoURL: "",
    password: "",
  });

  useEffect(() => {
    if (userData) {
      if (
        userData?.email.trim() &&
        userData?.displayName.trim() &&
        userData.photoURL.trim() &&
        userData.password
      ) {
        registerWithEmail(
          userData.email,
          userData.password,
          userData.displayName,
          userData.photoURL
        );
      }

      if (!userData?.email.trim()) {
        setErrors((prev) => {
          return { ...prev, email: "input-error" };
        });
      }
      if (!userData?.displayName.trim()) {
        setErrors((prev) => {
          return { ...prev, displayName: "input-error" };
        });
      }
      if (!userData?.photoURL.trim()) {
        setErrors((prev) => {
          return { ...prev, photoURL: "input-error" };
        });
      }
      if (!userData?.password.trim()) {
        setErrors((prev) => {
          return { ...prev, password: "input-error" };
        });
      }

      registerWithEmail(
        userData.displayName,
        userData.photoURL,
        userData.email,
        userData.password
      );
    }
  }, [userData]);

  return (
    <div className="auth-container -mt-6">
      <div className="auth-right">
        <img
          className="h-screen"
          src="https://leadgenapp.io/wp-content/uploads/2023/01/shutterstock_761462098-scaled-1-1024x645.jpg"
          alt=""
        />
      </div>
      <div className="auth-left">
        <Form
          method="post"
          className="flex flex-col items-center ml-40 mt-20 gap-5 card bg-base-300 w-96 p-5 shadow-xl"
        >
          <h1 className="text-4xl font-semibold">Register</h1>
          <FormInput
            type="text"
            name="displayName"
            labelText="displayName"
            status={errors.displayName}
          />
          <FormInput
            type="url"
            name="photoURL"
            labelText="PhotoUrl"
            status={errors.photoURL}
          />
          <FormInput
            type="email"
            name="email"
            labelText="email"
            status={errors.email}
          />
          <FormInput
            type="password"
            name="password"
            labelText="password"
            status={errors.password}
          />
          <div className="w-full">
            {!isPending && (
              <button className="btn btn-info btn-block">Register</button>
            )}
            {isPending && (
              <button disabled className="btn btn-primary btn-block">
                Loading...
              </button>
            )}
          </div>
          <div className="text-center">
            Do you have already acaunt ?
            <Link className="link-success" to="/login">
              Login
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
