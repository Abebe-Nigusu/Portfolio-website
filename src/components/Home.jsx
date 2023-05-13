import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeroImage from "../assets/MyPicture.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h3>
          <p className="text-white py-4 max-w-md">
            I have experience in Java Spring Boot,
            JavaScript(ES6, Node.js), Python, HTML5, CSS, SQL |
            Frameworks/Libraries: Flask, Jinja2, SpringBoot, jQuery,
            ReactJS, ExpressJS, Bootstrap, Material-UI |
            Databases: MySQL, MongoDB, Mongoose, | Tools: AJAX, Spring Tool
            Suite, Rest API, JSON, Postman, Socket.io, AWS(EC2), netlify, Azure
            DeveOPS, MySQL WorkBench, Git,Trello, Jira, Agile.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
