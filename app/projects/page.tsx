"use client";
import React, { useEffect } from "react";
import Card from "../components/Card/card";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const cardData = [
    {
      img: "/images/avion.png",
      title: "Next.js Hackathon Challenge",
      description: "Using Next.js TypeScript And Tailwind",
      link: "https://nextjs-hackathon-challenge.vercel.app/",
      aos: "flip-left",
    },
    {
      img: "/images/elite.png",
      title: "Ecommerce Website",
      description: "Using Next.js TypeScript And Tailwind",
      link: "https://ayesha-iqbal-ecommerce-website.vercel.app/",
      aos: "flip-left",
    },
    {
      img: "/images/port.png",
      title: "Personal Portfolio Website",
      description: "Class Assignment Project",
      link: "https://class-assignment-my-personal-website.vercel.app/",
      aos: "flip-left",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-40">
      <h1 className="text-5xl md:text-6xl animate-bounce font-rubik font-bold mb-10">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 mt-10 mb-24">
        {cardData.map((card, index) => (
          <div key={index} data-aos={card.aos}>
            <Card
              img={card.img}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;