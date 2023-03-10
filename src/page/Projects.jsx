import LineGradient from "../component/LineGradient";



const Project = ({ title, Project_title, description }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center  text-black bg-white `;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  // console.log(projectTitle);

  
  return (
    <div className="flex flex-col ">
      <div className="relative h-[400px] mt-[5%] ">
        <div className={overlayStyles}>
          <p className="text-2xl font-semibold font-playfair ">
            {Project_title}
          </p>
          <p className="mt-7">{description}</p>
          <button>readmore..</button>
        </div>

        <img
          className="h-[400px] w-[400px]  "
          src={require(`../asset/${projectTitle}.jpeg`)}
          alt={projectTitle}
        />
      </div>
      <div className="flex flex-row justify-around  items-end text-xl font-semibold shadow-lg p-[2%] text-gray-500   w-full">
        <button className="hover:scale-90">Code </button>
        <button className="hover:scale-90" >Demo</button>
      </div>
    </div>
  );
};



const Projects = () => {
 console.log("project loading ....")
  return (
    <section id="projects" className=" py-10 w-5/6 mx-auto sm:py-24 ">
      {/* HEADINGS */}
      <div className="md:w-2/5 mx-auto text-center">
        <div className="mb-10">
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-1">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="flex justify-center  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-20 gap-y-10 place-content-between">
          <Project
            title="Project 1"
            Project_title="SportsPortal for Graphic Era "
            description="This is mern stack application to book a slot for sports "
          />
          <Project
            title="Project 2"
            Project_title="Global Oneness .Com"
            description="Thsi is website for coaching institutes"
          />
           
        </div>
      </div>
    </section>
  );
};

export default Projects;
