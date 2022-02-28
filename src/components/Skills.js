import React, { Component } from 'react'
import { GrHadoop } from 'react-icons/gr';
import { FaAws } from 'react-icons/fa';
import {SiHtml5,SiJavascript,SiReact,SiPython,SiTableau} from 'react-icons/si';

export class Skills extends Component {
  render() {
    return (
      <div className=' max-w-3xl mx-auto justify-center py-12' id="tech">
          <p className='text-2xl text-black text-center sm:text-4xl pt-4 font-bold'>
              Tech I Use
          </p>
          <div className='flex flex-wrap justify-center pt-2'>
              <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                  <SiHtml5 color='#2196f3' className='mx-auto text-5xl'/>
                  <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>HTML5</p>
              </div>
              <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                  <SiJavascript color='#2196f3' className='mx-auto text-5xl'/>
                  <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>JS</p>
              </div>
              <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                  <SiReact color='#2196f3' className='mx-auto text-5xl'/>
                  <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>REACT</p>
              </div>
              <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                  <SiPython color='#2196f3' className='mx-auto text-5xl'/>
                  <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Python</p>
              </div>
              <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                  <FaAws color='#2196f3' className='mx-auto text-5xl'/>
                  <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>AWS</p>
              </div>
              <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                  <GrHadoop color='#2196f3' className='mx-auto text-5xl'/>
                  <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Hadoop</p>
              </div>
              <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                  <SiTableau color='#2196f3' className='mx-auto text-5xl'/>
                  <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>tableau</p>
              </div>

          </div>
      </div>
    )
  }
}

export default Skills
