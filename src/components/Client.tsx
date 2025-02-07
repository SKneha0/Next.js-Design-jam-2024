import React from 'react';
import Image from 'next/image';
import Men from '@/Image/clientmen.jip.png'
import { RxStarFilled } from "react-icons/rx";
import { TbStar } from "react-icons/tb";

type Testimonial = {
  id: number;
  name: string;
  profession: string;
  rating: number;
  text: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 0,
    name: 'Alamin Hasan',
    profession: 'Food Specialist',
    rating: 0,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero pariatur atque nihil impedit.',
    image: '/person1.jpg',
  },
  // Add more testimonials as needed
];

const Cilent: React.FC = () => {
  return (
    <section className=" text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-orange-500">Teatimonials</h2>
        <h3 className="text-4xl font-bold mb-8">What our clients are saying</h3>
        <div className="flex flex-col items-center">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md mb-8 flex flex-col items-center"
            >
              <Image
                src={Men}
                alt="Men"
                width={100}
                height={100}
                className="rounded-full mb-4"
              />
              <div className="text-xl font-semibold flex text-orange-500">
                <RxStarFilled />
                <RxStarFilled />
                <RxStarFilled />
                <RxStarFilled />
                <TbStar/>
              </div>
            
              <p className="italic mb-4">{testimonial.text}</p>
              <h4 className="text-lg font-bold">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.profession}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cilent;
