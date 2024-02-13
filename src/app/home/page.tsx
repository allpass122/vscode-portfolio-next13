import { cn } from "@/utils/cn";

/* eslint-disable quotes */
function HomePage() {
  function TextBlock({ text, flag }: { text: string; flag?: number }) {
    return (
      <div
        className={cn(
          "size-60 rounded-2xl bg-dark-primary p-4 first-letter:mr-2 first-letter:text-5xl first-letter:font-bold first-letter:uppercase first-letter:text-black",
          flag === 1 && "bg-red-400",
          flag === 2 && "bg-green-400",
          flag === 3 && "bg-blue-400",
          flag === 4 && "bg-yellow-400"
        )}
      >
        <span className="whitespace-pre-line text-xl text-gray-700">{text}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-row bg-dark-second p-8">
      <div className="flex size-fit flex-col gap-4 rounded-br-3xl border-b-8 border-r-8 border-orange-800 p-2 font-serif">
        <div className="flex flex-row gap-4">
          <TextBlock
            text={`Hello ~ This is home page.
        This is my first side-project, I hope you like it.`}
            flag={1}
          />
          <TextBlock
            text={`Obviously, I have no idea what to display here.`}
            flag={2}
          />
        </div>
        <div className="flex flex-row gap-4">
          <TextBlock
            text="Maybe I will update somthing in the future."
            flag={3}
          />
          <TextBlock
            text="Enjoy it!"
            flag={4}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
