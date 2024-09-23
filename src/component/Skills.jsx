import React from 'react';
import { Card } from 'flowbite-react';

// Import images
import pic1 from '../assets/pic1.jpeg';
import pic2 from '../assets/pic2.jpeg';
import pic3 from '../assets/pic3.jpeg';
import picc from '../assets/piccc.jpg';

const skillsData = [
  {
    id: 1,
    title: 'Vocational Skills',
    description:
      ' Proficiency in making custom shoes and bags, crochet art, woodworking, and hardware and electrical repairs.',
    imgSrc: pic1,
  },
  {
    id: 2,
    title: 'Kitchen and Confectioneries',
    description:
      ' Expertise in baking, pastry arts, and confectionery creation, including cake decoration and sweet crafting.',
    imgSrc: pic2,
  },
  {
    id: 3,
    title: ' Building Technology ',
    description:
      'Skills in plumbing, electrical installation, wiring, and painting to enhance building functionality and aesthetics.',
    imgSrc: pic3,
  },
  {
    id: 4,
    title: ' Textile & Fashion (Fashion Design & Adire)',
    description:
      'Knowledge in fashion design and traditional Adire fabric art, covering design principles, pattern making, and dyeing techniques.',
    imgSrc: picc,
  },
];

const Skills = () => {
  return (
    <>
   
    <h2 id='Skills' className='text-3xl my-6 font-bold font-montserrat text-green-600 text-center'>
        Skills to be Acquired

        </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 ">
        
      {skillsData.map((skill) => (
        <Card key={skill.id} imgSrc={skill.imgSrc} className="max-w-sm flex m-auto dark:bg-gray-500 ">
          <h5 className="text-2xl  font-bold tracking-tight text-center text-green-600 font-montserrat dark:text-white">
            {skill.title}
          </h5>
          <p className="font-normal font-palanquin text-center text-gray-700 dark:text-gray-400">
            {skill.description}
          </p>
        </Card>
      ))}
    </div>
    </>
  );
};

export default Skills;
