import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaPython } from "react-icons/fa";
import { FaCss3Alt, FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export default function TechStack() {
  const techIcons = [
    <FaCss3Alt key="css1" />,
    <FaHtml5 key="html1" />,
    <IoLogoJavascript key="js1" />,
    <RiNextjsFill key="next1" />,
    <FaPython key="py1" />,
    <RiTailwindCssFill key="tw1" />,
    <FaReact key="react1" />,
    <FaCss3Alt key="css2" />,
    <FaHtml5 key="html2" />,
    <IoLogoJavascript key="js2" />,
    <RiNextjsFill key="next2" />,
    <FaPython key="py2" />,
    <RiTailwindCssFill key="tw2" />,
    <FaReact key="react2" />,
  ];

  return (
    <section className="relative overflow-hidden w-full bg-bg py-24">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-52 h-52 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <p className="text-sm uppercase tracking-[0.3em] text-muted mb-3">
          Skills & Tools
        </p>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
          Tech Stack
        </h2>

        <p className="mt-4 text-muted max-w-xl mx-auto text-base md:text-lg">
          Technologies I use to build modern websites, AI tools and fast user experiences.
        </p>
      </div>

      {/* Slider */}
      <div className="relative z-10 overflow-hidden border-y border-border bg-surface/70 backdrop-blur-md py-10">
        <div className="flex whitespace-nowrap animate-auto-scroll gap-16 px-4">
          {techIcons.map((Icon, index) => (
            <div
              key={index}
              className="text-[52px] text-gray-300 hover:text-accent hover:scale-125 transition-all duration-300 cursor-pointer"
            >
              {Icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}