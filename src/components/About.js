import React, { Component } from "react";
import ScrollIntoView from "react-scroll-into-view"; //https://www.npmjs.com/package/react-scroll-into-view
import { FaChevronDown } from "react-icons/fa";

export class About extends Component {
  render() {
    return (
      <>
        <div className="max-w-4xl mt-20 mx-auto">
          <p className="text-2xl text-black md:text-4xl font-bold text-center">
            Hey 👋
          </p>
          <p className="text-base sm:text-xl font-bold text-center text-gray-600 leading-relaxed mt-4">
            1991年大阪生まれ、NAIST修士 ▶︎ ヤフーエンジニア（6年間）▶︎ 転職活動中
          </p>
        </div>
        {/* <ScrollIntoView selector="#tech">
          <div className="mx-auto p-20">
              <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500"/>
          </div>
        </ScrollIntoView> */}
      </>
    );
  }
}

export default About;
