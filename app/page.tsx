import Image from "next/image";
import Link from "next/link";
import HeroSection from "./components/heroSection";
import TechStack from "./components/autoSroll";
import ProjectCard from "./components/projectCard";


const featuredProjects = [
  {
      img: "/images/pic1.png",
      title: "Ice-Cream Shop Website ",
      description: "Using Next.js TypeScript And Tailwind",
      link: "https://ice-cream-website-using-next-js-5x3v.vercel.app/",
      aos: {
        "data-aos": "flip-left",
        "data-aos-easing": "ease-out-cubic",
        "data-aos-duration": "2000",
      },
    },
    {
      img: "/images/pic2.png",
      title: "Inventory-Management-System",
      description: "Using Next.js TypeScript And Tailwind",
      link: "https://inventory-management-system-seven-tawny.vercel.app/",
      aos: {
        "data-aos": "flip-left",
        "data-aos-easing": "ease-out-cubic",
        "data-aos-duration": "2000",
      },
    },
    {
      img: "/images/book.PNG",
      title: "Evolution Of Todo Eight",
      description: "Using Ai ",
      link: "https://hackathon-ii-the-evolution-of-todo-eight.vercel.app/",
      aos: {
        "data-aos": "flip-left",
        "data-aos-easing": "ease-out-cubic",
        "data-aos-duration": "2000",
      },
    },

    {
      img: "/images/teck.png",
      title: "Tech Blog",
      description: "Nextjs Dynamic Routing",
      link: "https://milestone-03-blog-assignment-ayesha-iqbal.vercel.app/blog",
      aos: {
        "data-aos": "flip-left",
        "data-aos-easing": "ease-out-cubic",
        "data-aos-duration": "2000",
      },
    },

    {
      img: "/images/resume.png ",
      title: "Dynamic Resume Builder",
      description: "Using HTML Css And Typescript",
      link: "https://resume-builder-wine-iota.vercel.app/",
      aos: {
        "data-aos": "flip-left",
        "data-aos-easing": "ease-out-cubic",
        "data-aos-duration": "2000",
      },
    },

    {
      img: "/images/dash.png",
      title: "Marketplace Admin Dashboard",
      description: "Using TypeSrcipt",
      link: "https://furniture-marketplace-admin-dashboard.vercel.app/",
      aos: {
        "data-aos": "flip-left",
        "data-aos-easing": "ease-out-cubic",
        "data-aos-duration": "2000",
      },
    },
];

const servicePreviews = [
  { title: "Full-Stack Web Development", href: "/services" },
  { title: "AI Agent Development", href: "/services" },
  { title: "UI/UX Design & Development", href: "/services" },
];

export default function Home() {
  return (
    <div className="bg-bg min-h-screen">
      

      {/* Hero */}
      <HeroSection />

      {/* About */}
      <section className="py-24 px-6 md:px-[clamp(20px,6vw,110px)] bg-bg">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <Image
            src="/images/dp.jpeg"
            alt="Ayesha Iqbal"
            width={160}
            height={160}
            className="rounded-full object-cover w-36 h-36 flex-shrink-0"
          />
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              I&apos;m Ayesha Iqbal — an emerging full-stack developer and AI engineer with 2+ years of hands-on
              experience building web applications and intelligent systems. I specialise in Next.js, React, TypeScript,
              and the OpenAI Agents SDK, with a growing focus on multi-agent pipelines and conversational AI.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block border-2 border-primary text-primary px-6 py-2.5 font-semibold hover:bg-primary hover:text-bg transition-all duration-300 rounded-md text-sm"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24 px-6 md:px-[clamp(20px,6vw,110px)] bg-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">Services</h2>
          <p className="text-lg text-muted mb-12">A few things I&apos;m great at.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {servicePreviews.map(({ title, href }) => (
              <Link
                key={title}
                href={href}
                className="group bg-bg rounded-xl p-6 hover:bg-accent transition-colors duration-300"
              >
                <p className="font-semibold text-primary group-hover:text-white transition-colors duration-300">
                  {title}
                </p>
                <span className="mt-3 inline-block text-xs text-muted group-hover:text-white/70 transition-colors duration-300">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-right">
            <Link href="/services" className="text-sm font-semibold text-accent hover:underline">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-24 px-6 md:px-[clamp(20px,6vw,110px)] bg-bg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted mb-12">A selection of work I&apos;m proud of.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} prop={project} />
            ))}
          </div>
          <div className="mt-12 text-right">
            <Link href="/projects" className="text-sm font-semibold text-accent hover:underline">
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack />

      {/* Contact CTA */}
      <section className="py-24 px-6 md:px-[clamp(20px,6vw,110px)] bg-surface text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6">
          Let&apos;s build something.
        </h2>
        <p className="text-lg text-muted mb-8 max-w-xl mx-auto">
          Have a project in mind? I&apos;d love to hear about it.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-bg px-10 py-4 font-semibold hover:bg-accent transition-colors duration-300 rounded-md"
        >
          Start a conversation
        </Link>
      </section>
    </div>
  );
}
