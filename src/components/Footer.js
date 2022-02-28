import React, { Component } from "react";
import { FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

export class Footer extends Component {
  render() {
    return (
      <div className="py-5 border-t-3/2">
        <div className="flex justify-center mt-4">
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
        <div className="flex justify-center mt-4">
            <p className="text-black mb-4">
                Made with <span className="mr-2" role="link" aria-label="heart">💙</span>by <a className="text-blue-500 hover:underline" href="mailto:per.tkhm@gmail.com">Kotaro Takahama</a>
            </p>
        </div>
      </div>
    );
  }
}

export default Footer;
