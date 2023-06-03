"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        // Define default options
        className: "",
        duration: 5000,
      }}
    />
  );
};

export default ToasterProvider;
