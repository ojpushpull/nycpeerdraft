import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import CustomizeIconImage from "images/customize-icon.svg"

import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Blog from "components/blogs/GridWithFeaturedPost.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStartedLight.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ThreeColSimple from "components/features/ThreeColSimple";
import StarIconImage from "images/star-icon.svg";
const HighlightedText = tw.span`text-primary-500`

const cards = [
  {
    imageSrc: StarIconImage,
    title: "Hello",
    description: "We gonna help u security.",
    url: "https://facebook.com"
  },
  {
    imageSrc: StarIconImage,
    title: "24/7 Support",
    description: "None fake latin",
    url: "https://youtube.com"
  },
  {
    imageSrc: CustomizeIconImage,
    title: "COkay",
    description: "Work and learn",
    url: "https://reddit.com"
  }
]
export default () => {
  return (
    <AnimationRevealPage>
      <Hero heading={"Nyc Peers"} description={"The website is a sidekick to anyone who wants to become or already is a peer working or living in NYC"} />
      <ThreeColSimple  cards={cards} />
      <Footer />
    </AnimationRevealPage>
  );
}
