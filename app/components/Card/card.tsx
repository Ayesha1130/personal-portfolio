import Link from 'next/link';
import React from 'react';

interface CardProps {
  img: string;
  alt?: string;
  title: string;
  description: string;
  link: string;
}
const Card: React.FC<CardProps> =
({ img, alt='Image', title, description , link, ...aosProps })=>{
  return(
    <div {...aosProps} className="flex flex-col justify-center items-center p-4 h-[350px] w-[300px] md:w-[500px] lg:w-[500px] border border-width-3 bg-background rounded-xl">
      <img className="rounded-md w-80 h-96 items-center" src={img} alt={alt} />
      <h2 className="text-lg py-2 font-semibold ">{title}</h2>
      <p className="text-sm text-center mt-1 text-gray-400 animate-pulse">{description}</p>
      <Link href={link} className="w-full flex justify-center items-center py-3 rounded-md text-white bg-[#1b1b62] hover:bg-blue-900">
        View Project
      </Link>

    </div>
  );
};
export default Card;