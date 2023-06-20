"use client"

import Carousel from "react-multi-carousel"

import "react-multi-carousel/lib/styles.css"
import React, { useState } from "react"

import { SuggestionCard } from "@/components/coding_cubes/suggestion_card"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 20,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

export function RowOfCards() {
  const [showArrows, setShowArrows] = useState(false)

  const handleMouseOver = () => setShowArrows(true)
  const handleMouseOut = () => setShowArrows(false)

  return (
    <div
      className="pl-40 pt-20"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <p className="font-bold text-[24px] mt-[-35px] pb-5">💡 SUGGESTED:</p>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        partialVisible={true}
        responsive={responsive}
        ssr={true}
        infinite={false}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        arrows={showArrows}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="inline-block">
          <SuggestionCard
            src="/full-stack.png"
            title="Frontend Web Development"
            description="Develop your HTML / CSS and JavaScript skills with these projects."
          />
        </div>
        <div className="inline-block">
          <SuggestionCard
            src="/default_skeleton_card.png"
            title="Some Title"
            description="Some Description."
          />
        </div>
        <div className="inline-block"></div>
        <div className="inline-block"></div>
      </Carousel>
    </div>
  )
}
