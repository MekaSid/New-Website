'use client';

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Welcome Section - White */}
      <section className="min-h-[90vh] bg-white flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
          <div className="max-w-2xl">
            <h1 className="text-7xl md:text-9xl font-bold text-black mb-6">
              Hi, I'm Sid
            </h1>
            <p className="text-xl md:text-3xl text-gray-600 mb-8">
              I'm a Software Engineer who loves to create, learn, and build.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Explore My Work
              </button>
              <button className="border border-gray-300 hover:border-black text-gray-700 hover:text-black px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Get In Touch
              </button> */}
            </div>
          </div>
        </div>
        {/* Peek of next section */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-black"></div>
      </section>

      {/* About Section - Black */}
      <section className="h-screen bg-black flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
          <div className="text-center">
            {/* Profile Picture */}
            <div className="mb-16 flex justify-center">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gray-700 border-4 border-white overflow-hidden flex items-center justify-center">
                {/* Replace this div with an actual image */}
                <div className="text-white text-7xl md:text-9xl font-bold">
                  S
                </div>
                {/* Uncomment and replace the src with your actual image path */}
                <img 
                  src="/home/profilepic.png" 
                  alt="Sid Mekarao" 
                  className="w-full h-full object-cover object-left"
                  style={{ transform: 'translateX(-30px)' }}
                />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              I'm a Masters student at Cal Poly, San Luis Obispo, pursuing a degree in Computer Science. 
              I'm interested in software development, machine learning, and artificial intelligence for real-world applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">3+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">30+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">Eagerness to Learn</div>
              </div>
            </div>
          </div>
        </div>
        {/* Peek of next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white"></div>
      </section>

      {/* Skills Section - White */}
      <section className="h-screen bg-white flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-black mb-2">Languages</div>
                <div className="text-gray-600">Java, Python, C, SQL, JavaScript, Typescript, HTML/CSS, R</div>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-black mb-2">Frameworks</div>
                <div className="text-gray-600">React, NodeJS, NextJS, Flask, AngularJS, Spring Boot, Guidewire</div>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-black mb-2">Design</div>
                <div className="text-gray-600">UI/UX, Figma, Prototyping, Photoshop, Illustrator</div>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-black mb-2">Tools</div>
                <div className="text-gray-600">Git, Docker, AWS, Jira, MongoDB, Supabase, Vercel</div>
              </div>
            </div>
          </div>
        </div>
        {/* Peek of next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-black"></div>
      </section>

      {/* Research Section - Black */}
      <section className="h-screen bg-black flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Masters Research
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
            My research focuses on developing interpretable, multimodal AI systems to predict wildfire risk using spatial, 
            temporal, and environmental data. By integrating Topological Data Analysis (TDA), 
            my research aims to uncover how and why models make decisions—leading to more reliable and transparent predictions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Research Areas</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Computer Vision & Image Processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Topological Data Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Convolutional Neural Networks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Long Short-Term Memory Networks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Artificial Intelligence and Machine Learning Explanability</span>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Research Collaboration</h3>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-3">Academic Partnership</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Collaborating with Professor Ka Yaw Teo in the Computer Science Department at Cal Poly, 
                    leveraging university resources and research facilities to advance AI and machine learning research.
                  </p>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-300 text-sm">
                      <span className="text-blue-400 font-medium">Cal Poly Resources:</span> Access to high-performance 
                      computing clusters, specialized AI research labs, and collaborative research networks 
                      supporting cutting-edge computational research.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Peek of next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white"></div>
      </section>

      {/* CTA Section - White */}
      <section className="h-screen bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">
              Explore
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Take a look at my timeline to see my experience and journey, or browse through my gallery of photos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/timeline" className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                View Timeline
              </a>
              <a href="/gallery" className="border border-black hover:bg-black text-black hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Browse Gallery
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
