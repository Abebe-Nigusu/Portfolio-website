import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm a passionate Full Stack Developer who enjoys solving complex
          problems and creating innovative tech solutions. Programming lets me
          express my creativity and utilize logic to develop new and useful
          things. Building from scratch using different programming languages
          and tools is incredibly fulfilling to me. I'm always learning and
          adapting to new technologies, which keeps me motivated. As a Full
          Stack Developer, I get to work on both front-end design and back-end
          functionality, giving me a holistic understanding of projects and the
          ability to make informed decisions. Collaborating with others in
          design, product management, and development is also highly rewarding.
          I believe Full Stack Development is an ideal field for tech
          enthusiasts who enjoy problem-solving. 
        </p>
      </div>

      {/* <br />

        <p className="text-xl"></p> */}
    </div>
    // </div>
  );
};

export default About;
