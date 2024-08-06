import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// pages
import { Home, Login, Register } from "./pages";
import Liked from "./pages/Liked";

// layouts
import MainLayout from "./layouts/MainLayout";

// actions
import { action as LoginAction } from "./pages/Login";
import { action as RegisterAction } from "./pages/Register";
import { action as HomeAction } from "./pages/Home";
// import {action as GalleryAction} from "./pages/Gallery";

// components;
import { ProtectedRoutes } from "./components";

//redux
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { isAuthChange, login } from "./app/userSlice";

//firebase
import { auth } from "./firebase/firebiseConfig";
import { onAuthStateChanged } from "firebase/auth";

import { Gallery } from "./pages/Gallery";
// import Liked from "./pages/Liked"

function App() {
  const { user, isAuthReady } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
          action: HomeAction,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      action: LoginAction,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
      action: RegisterAction,
    },
    {
      path: "/gallery",
      element: user ? <Gallery /> : <Navigate to="/login" />,
      // action: GalleryAction,
    },
    {
      path: "/liked",
      element: user ? <Liked /> : <Navigate to="/login" />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.displayName && user?.photoURL) {
        dispatch(login(user));
      }
      dispatch(isAuthChange());
    });
  }, [dispatch]);

  return <>{isAuthReady && <RouterProvider router={routes} />}</>;
}

export default App;
