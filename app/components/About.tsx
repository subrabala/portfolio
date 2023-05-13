const techstack = [
  "React JS",
  "Node JS",
  "Express JS",
  "PostgreSQL",
  "SCSS",
  "Figma",
  "Bootstrap",
  "Tailwind",
  "C++"
];

export default function About() {
  return (
    <>
      <main className="bg-neutral-950 container w-full h-auto">
        <div className="aboutdesc flex">
          <div className="right mx-auto md:w-6/12 p-10 hidden md:flex ">
            <img
              src="/circle.png"
              className="flex justify-center items-center"
            />
          </div>

          <div className="right p-10 md:text-left md:w-6/12">
            <div className="font-can text-7xl md:text-6xl t h-100 p-10 text-gray-200 text-left">
              ABOUT
            </div>
            <p className="text-lg text-gray-300 p-10 pt-6">
              Hey there! I'm Subrabala (aka sub), a 2nd year CSE undergrad with
              a passion for dynamic design and development. My journey includes
              an exciting mix of internships and freelance work <br />
              <br />
              When I'm not coding, you can find me strumming my guitar or
              creating art. I like to keep things minimal but with a unique
              twist, and I'm always on the lookout for new hobbies to try out.
            </p>
          </div>
        </div>

        <div className="techstack p-10 ">
          <h1 className="text-white font-can text-6xl p-5">Tech Stack</h1>
          <div className="languages flex flex-wrap">
            {techstack.map((tech) => (
              <div className="m-2 p-3 text-lg bg-stone-800 rounded-md text-white">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
