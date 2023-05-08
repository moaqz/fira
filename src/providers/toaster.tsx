"use client";

import { Toaster } from "react-hot-toast";

function ToasterProvider() {
  return <Toaster reverseOrder={false} />;
}

export default ToasterProvider;
