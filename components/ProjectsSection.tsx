

interface ProjectProps {
  imageUrl: string;
  linkUrl: string;
}

const ProjectsSection: React.FC<ProjectProps> = ({ imageUrl, linkUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={"/headshot.png"} alt="Project" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Project Name</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={"https://github.com/sudaisansari"} target="_blank" rel="noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectsSection;
