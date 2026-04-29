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
      description: "Using Next.js, TypeScript and Tailwind",
      link: "https://nextjs-hackathon-challenge.vercel.app/",
      aos: "flip-left",
    },
    {
      img: "/images/elite.png",
      title: "Ecommerce Website",
      description: "Using Next.js, TypeScript and Tailwind",
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
    {
      img: "/images/pic1.png",
      title: "Ice-Cream Shop Website",
      description: "Using Next.js, TypeScript and Tailwind",
      link: "https://ice-cream-website-using-next-js-5x3v.vercel.app/",
      aos: "flip-left",
    },
    {
      img: "/images/pic2.png",
      title: "Inventory Management System",
      description: "Using Next.js, TypeScript and Tailwind",
      link: "https://inventory-management-system-seven-tawny.vercel.app/",
      aos: "flip-left",
    },
    {
      img: "/images/book.PNG",
      title: "Evolution Of Todo Eight",
      description: "Using AI",
      link: "https://hackathon-ii-the-evolution-of-todo-eight.vercel.app/",
      aos: "flip-left",
    },
    {
      img: "/images/teck.png",
      title: "Tech Blog",
      description: "Next.js Dynamic Routing",
      link: "https://milestone-03-blog-assignment-ayesha-iqbal.vercel.app/blog",
      aos: "flip-left",
    },
    {
      img: "/images/resume.png",
      title: "Dynamic Resume Builder",
      description: "Using HTML, CSS and TypeScript",
      link: "https://resume-builder-wine-iota.vercel.app/",
      aos: "flip-left",
    },
    {
      img: "/images/dash.png",
      title: "Marketplace Admin Dashboard",
      description: "Using TypeScript",
      link: "https://furniture-marketplace-admin-dashboard.vercel.app/",
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