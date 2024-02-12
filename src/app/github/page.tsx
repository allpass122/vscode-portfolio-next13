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
              className="my-4 rounded-full"
              src={user.avatar_url}
              width={160}
              height={160}
              alt={"avatar"}
            />
          </div>
          <a
            className="font-inter text-gray-400 "
            href={"https://github.com/dempsey1229"}
            target="_blank"
            rel="noreferrer"
          >
            {user.login}
          </a>
        </div>
        <div className="font-inter flex items-center rounded-lg bg-dark-primary p-4">
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
  // const requestBody = {
  //   query: `query($userName:String!) {
  //     user(login: $userName){
  //       contributionsCollection {
  //         contributionCalendar {
  //           totalContributions
  //           weeks {
  //             contributionDays {
  //               contributionCount
  //               date
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }`,
  //   variables: { userName: process.env.NEXT_PUBLIC_GITHUB_USERNAME },
  // };

  // const calendarRes = await fetch("https://api.github.com/graphql", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `token ${process.env.GITHUB_API_KEY}`,
  //   },
  //   body: JSON.stringify(requestBody),
  // });
  // const calendar = await calendarRes.json();
  // console.log(calendar.data.user.contributionsCollection);

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
  // console.log(user);
  return {
    user,
  };
}

export default GithubPage;
