"use client";

import { InfoIcon } from "lucide-react";
import SkillChip from "@/app/_component/skillChip";
import type { ChipSet } from "@/app/_component/skillChip";
import { useState } from "react";

export type Project = {
  title: string;
  description: string;
  tags: ChipSet[];
  teamProject: boolean;
  teamProjectParticipation?: string;
  // href
  sourceCode?: string;
  demo?: string;
};

function ProjectPage() {
  const [hover, setHovered] = useState<string | null>(null);
  const projects: Project[] = [
    {
      title: "VSCode Portfolio",
      description: "A VSCode style portfolio based on next13 app route and tailwindcss.",
      tags: ["nextjs", "tailwind", "nuqs", "headless-ui"],
      teamProject: false,
      sourceCode: "https://github.com/allpass122/vscode-portfolio-next13",
      demo: "/",
    },
    {
      title: "NTU Course",
      description: "A course selection system for National Taiwan University students.",
      tags: ["nextjs", "tailwind", "nuqs", "react-query", "zod", "next-intl", "mui", "dnd-kit"],
      teamProject: true,
      teamProjectParticipation: "Some frontend features",
      demo: "https://course.ntu.edu.tw/",
    },
    {
      title: "Nice Cloud",
      description: "An ERP system for beauty clinics to manage their businesses.",
      tags: ["postgres", "knex", "node", "antd", "joi", "react-query", "next-intl", "zod"],
      teamProject: true,
      teamProjectParticipation:
        "A partial of frontend work, backend api and database, DevOps not included",
    },
    {
      title: "Councilor Constituent Service Website",
      description: "Website for a councilor providing service for voters",
      tags: ["postgres", "node", "antd", "joi", "strapi"],
      teamProject: true,
      teamProjectParticipation:
        "A partial of frontend work, backend api and database, DevOps not included",
    },
  ];

  function ProjectCard({ project }: { project: Project }) {
    return (
      <div className="flex-0 relative basis-1/4 flex-col rounded-lg p-4">
        <div className="min-h-[250px] min-w-[180px] gap-2 rounded-lg border border-yellow-400 bg-dark-primary p-4">
          {project.teamProject && (
            <InfoIcon
              className="absolute right-0 top-0 z-10 size-8 cursor-pointer rounded-full bg-dark-primary text-yellow-400"
              onMouseEnter={() => setHovered(project.title)}
              onMouseLeave={() => setHovered(null)}
            />
          )}
          {hover === project.title && (
            <div className="absolute right-8 top-[-2rem] z-20 text-pretty rounded border border-yellow-400 bg-dark-primary p-2 font-inter ">
              {project.teamProjectParticipation}
            </div>
          )}
          <div className="mb-2 gap-2 rounded font-cmono text-xl font-bold text-yellow-400">
            {project.title}
          </div>
          <div className="text-basic text-yellow-200">{project.description}</div>
          <div className="my-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <SkillChip
                key={tag}
                name={tag}
              />
            ))}
          </div>
          {project.sourceCode && (
            <a
              className="mr-4 border-b"
              href={project.sourceCode}
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          )}
          {project.demo && (
            <a
              className="mr-4 border-b"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-dark-second p-8 font-tech">
      <div className="h-[80vh] overflow-scroll hide-scrollbar">
        <div className="select-none font-cmono text-3xl font-bold text-sky-500">
          My Project List
        </div>
        <div className="flex flex-wrap items-center whitespace-pre">
          <InfoIcon className="size-4 cursor-pointer rounded-full bg-dark-primary text-yellow-400" />{" "}
          <span> = team project, otherwise personal project. Hover to see details</span>
        </div>
        <div className="my-4 flex flex-row flex-wrap">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
