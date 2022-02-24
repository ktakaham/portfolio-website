import React, { Component } from "react";
import profile from "../images/image.png";
import { FaGithub } from "react-icons/fa";

export class Card extends Component {
  render() {
    return (
      <div className="w-full">
        <div className="felx flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
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

            <div className="flex align-center justify-center mt-4" />
          </div>
          <a className="text-xl text-gray-800 hover: bg-gray-800 rounded-full">
            <FaGithub />
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
