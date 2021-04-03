import React, { useState } from "react";
import Home from "../components/Home";
import Loader from "../components/Loader";

const HomeContainer = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (loading) return <Loader />;

  return <Home username="@juan.constantine" />;
};

export default HomeContainer;
