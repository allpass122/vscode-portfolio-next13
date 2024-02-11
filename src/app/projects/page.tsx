function ProjectPage() {
  function ProjectCard() {
    return (
      <div className="flex-0 basis-1/3 flex-col rounded-lg p-4">
        <div className="aspect-[2/3] min-h-[250px] min-w-[180px] gap-2 rounded-lg bg-dark-primary">
          <div className="aspect-video rounded-lg bg-red-200">Image</div>
          <div className="p-2">Content</div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-tech flex-1 bg-dark-second p-8">
      <div className="hide-scrollbar h-[80vh] overflow-scroll">
        <div className="text-3xl text-pink-500">My Project List</div>
        <div className="my-4 flex flex-row flex-wrap">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
