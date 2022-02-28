import React, { Component } from "react";
import profile from "../images/image.png";
import { FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

export class Card extends Component {
  render() {
    return (
      <div className="w-full">
        <div className="felx flex-col justify-center max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-5">
          <div className="">
            <img
              className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
              src={profile}
              alt="profile image"
            />
          </div>
          <div className="text-center mt-5">
            <p className="text-xl sm:text-2xl text-gray-900">Kotaro Takahama</p>
            <p className="text-xs sm:text-base text-gray-600 pt-4 px-5 w-auto inline-block border-b-2">
              Data Engineer / Web Developer
            </p>

            <div className="flex align-center justify-center mt-4">
              <a
                className="text-xl m-1 p-1 sm:m-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                href="https://github.com/ktakaham"
              >
                <FaGithub />
                <span className="sr-only">Github</span>
              </a>
              <a
                className="text-xl m-1 p-1 sm:m-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
                href="https://twitter.com/Atkhm"
              >
                <FaTwitter />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                className="text-xl m-1 p-1 sm:m-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                href="per.tkhm@gmail.com"
              >
                <FaEnvelope />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
