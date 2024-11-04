import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import light from "components/headers/light";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import TwoColWithButton from "components/features/TwoColWithButton";
import FullWidthWithImage from "components/hero/FullWidthWithImage";
import TabCardGrid from "components/cards/TabCardGrid";
import MiniCenteredFooter from "components/footers/MiniCenteredFooter";

export default function NewHomePage() {

    return (
    <>
   <light />
   <FullWidthWithImage />
   <TwoColWithButton />
   <TabCardGrid />
   <MiniCenteredFooter />


   
    </>

    );
}

