import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import BackgroundAsImage from "components/hero/BackgroundAsImage";
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
    title: "Website built for peers.",
    description: "Peers perform a wide variety of tasks for their clients and organizations. This site is here to help peers perform their jobs better.",
    url: "https://facebook.com"
  },
  {
    imageSrc: StarIconImage,
    title: "Trainings",
    description: "Getting trained to become a peer or become a better peer these trainings will get you to where you want to go.",
    url: "https://youtube.com"
  },
  {
    imageSrc: CustomizeIconImage,
    title: "Resources",
    description: "NYC has so many organizations offering help knowing who and where to go can be daunting. We help find the information you need to help your clients.",
    url: "https://reddit.com"
  }
]

const navLinks = [ ]

export default () => {
  return (
    <AnimationRevealPage>
      <BackgroundAsImage navLinks={null} links={null} />
      <Hero heading={"Nyc Peers"} description={"The website is a sidekick to anyone who wants to become or already is a peer working or living in NYC"} />
      <ThreeColSimple  cards={cards} />
      <Footer />
    </AnimationRevealPage>
  );
}
