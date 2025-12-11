import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../components/Loader";

export default function RootLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loader />}
      <Outlet />
    </>
  );
}
