import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className="text-center bg-blue-900 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl"> About us</h2>
      <p className="text-2xl italic pt-5 px-10 text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
        voluptatum, quod, quos, quas, aperiam quibusdam quia dolorum nemo
        molestiae autem ipsam. Quisquam, voluptates, quibusdam, quae, quos
        voluptatem dolorum quod doloremque.
      </p>
    </div>
  );
};

export default AboutPage;
