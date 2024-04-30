import { watch } from "fs/promises"
import React from "react"
// import Image from "next/image"


const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Tailwind CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React.js" },
  { skill: "Next.js" },
  { skill: "Node.js" },
  { skill: "C++" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Figma" },
  { skill: "Adobe Illustrator" },
  { skill: "Canva" },  
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-20">
        <h2 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-600 border-0 rounded"></hr>
        </h2>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          {/* Left Side */}
          <div className="md:w-1/2 ">
            <h3 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h3>
            <div className="text-center md:text-left">
            <p>
              Hi, my name is Muhammad Sudais Ansari and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> web developer.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, and programming.
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that I {" "}
              <span className="font-bold text-[#31DB98]">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and I am
              always open to new opportunities. 🙂
            </p> 
            </div>
          </div>
          {/* Right Side */}
          {/* skills */}
          <div className="text-center md:w-1/2 md:text-left">
            <h4 className="text-2xl font-bold mb-6">My Skills</h4>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-[#103737] px-4 py-2 mr-2 mt-2 text-[#31DB98] rounded font-semibold hover:animate-fadeIn"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            {/* Bar */}
            {/* <div className="mt-4">
              <div className="w-full bg-neutral-200 dark:bg-neutral-600">
                <div
                    className="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100 w-1/2"
                    style={{marginRight:  + 'em'}}>
                  25%
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
