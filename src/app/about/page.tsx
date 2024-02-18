import dayjs from "dayjs";

type Experiences = {
  enterprise: string;
  // dayjs.Dayjs
  start: string;
  end: string | null;
  position: string;
  description: string;
}[];

const experiences: Experiences = [
  {
    enterprise: "Maijoe Tech",
    start: "2023-05",
    end: null,
    position: "Full Stack Engineer",
    description: `Build efficient and maintainable products including official website and ERP system.
      I'm responsible for backend api development, frontend development and database maintenance.
      As a member of startup company, I also engage in product feature, page layout discussion including technology stack.`,
  },
  {
    enterprise: "NTU Computer Information Management Division",
    start: "2023-11",
    end: null,
    position: "Intern Engineer",
    description: `Develop a course selection system as part of the frontend team.
      This is a part-time position with remote work.`,
  },
  {
    enterprise: "LnData",
    start: "2022-08",
    end: "2023-04",
    position: "Full Stack Engineer",
    description: `Developing ESG system and tag manager system by Node.js, Express, Sequelize (ORM) and mySQL.
      Sometimes support frontend (React.js).`,
  },
  {
    enterprise: "Tomofun | Furbo Dog Camera",
    start: "2020-09",
    end: "2021-01",
    position: "Embedded Software Engineer Intern",
    description: `Maintain C++ firmware in our product, integrating code from various teams such as the AI, backend, frontend, and app teams to ensure seamless functionality.
      Additionally, address and resolve issues identified by the QA team.`,
  },
];

function AboutPage() {
  function Experience() {
    const timeFormatted = (date: string | null) =>
      date === null ? "PRESENT" : dayjs(date).format("MMM YY");

    return (
      <ol className="group/list flex h-[65vh] flex-col overflow-y-scroll hide-scrollbar">
        {experiences.map((experience) => (
          <li
            key={experience.enterprise}
            className="m-2 flex cursor-pointer flex-row flex-wrap content-center gap-4 rounded-lg border border-transparent p-2
              hover:bg-white hover:bg-opacity-5 hover:!opacity-100 group-hover/list:opacity-50"
          >
            <div className="w-40 text-left text-sm text-violet-400">{`${timeFormatted(experience.start)} - ${timeFormatted(experience.end)}`}</div>
            <div className="flex w-80 flex-col">
              <span className="text-left text-lg text-violet-600">{`${experience.position}`}</span>
              <span className="text-violet-600">{`@${experience.enterprise}`}</span>
              <span className="my-1 whitespace-pre-line text-balance text-sm text-violet-300">{`${experience.description}`}</span>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div className="bg-base-100 flex grow flex-col p-8">
      <div className="bg-base-200 flex w-fit grow flex-col justify-between rounded-lg p-4">
        <span className="font-tech text-2xl text-sky-600">{"<experience>"}</span>
        <Experience />
        <span className="font-tech text-2xl text-sky-600">{"</experience>"}</span>
      </div>
    </div>
  );
}

export default AboutPage;
