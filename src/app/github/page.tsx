import Image from "next/image";
import GithubCalendar from "@/app/github/_component/githubCalendar";

async function GithubPage() {
  const { user } = await getData();
  return (
    <div className="flex grow flex-col bg-dark-second p-8">
      <div className="flex flex-row flex-wrap gap-2">
        <div className="rounded-lg bg-dark-primary p-4">
          <div>
            <Image
              rel="preload"
              className="my-4 rounded-full"
              src={user.avatar_url}
              width={160}
              height={160}
              alt={"avatar"}
            />
          </div>
          <a
            className="font-inter text-white"
            href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
          >
            {user.login}
          </a>
        </div>
        <div className="flex items-center rounded-lg bg-dark-primary p-4 font-inter">
          <GithubCalendar
            username={process.env.NEXT_PUBLIC_GITHUB_USERNAME as string}
            user={user}
          />
          {/* <div className=""> {user.public_repos} </div> */}
          {/* <div className="">{user.followers}</div> */}
        </div>
      </div>
    </div>
  );
}

async function getData() {
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  if (!userRes.ok) {
    throw new Error("Failed to fetch data");
  }
  const user = await userRes.json();
  return { user };
}

export default GithubPage;
