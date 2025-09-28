import React from 'react';
import Image from 'next/image';
import Container from '../layout/Container';

const EmspSection = () => {
  return (
    <section className="bg-white text-black py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Content */}
          <div>
            <Image src="/emsp_placeholder.png" alt="EMSP Platform" width={500} height={400} className="rounded-lg shadow-lg" />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-teal-500 font-bold">EMSP PLATFORM</h3>
            <h2 className="text-3xl font-bold my-4">For Your Business</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex space-x-4">
              <button className="bg-teal-500 text-white px-6 py-2 rounded-full">For Home</button>
              <button className="border border-teal-500 text-teal-500 px-6 py-2 rounded-full">For Business</button>
              <button className="border border-teal-500 text-teal-500 px-6 py-2 rounded-full">For Partners</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EmspSection;
