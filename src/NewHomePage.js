import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import light from "components/headers/light";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";

export default function NewHomePage() {

    return (
    <>
   <light />
   <Blog />
    </>

    );
}

