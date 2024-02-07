function ContactPage() {
  const contactItems = [
    {
      social: "website",
      link: "dempsey.vscode.portfolio",
      href: "/",
    },
    {
      social: "email (personal)",
      link: "dges5102@gmail.com",
      href: "mailto:dges5102@gmail.com",
    },
    {
      social: "email (office)",
      link: "dempsey@maijoe.com",
      href: "mailto:dempsey@maijoe.com",
    },
    {
      social: "linkedIn",
      link: "wenyen huang",
      href: "https://www.linkedin.com/in/wenyen-huang-45a7a9207/",
    },
  ];
  function CodeStyleBlock() {
    return (
      <div className="my-6 w-fit whitespace-pre text-lg selection:bg-indigo-300 selection:text-indigo-900">
        <span className="mr-4 select-none text-gray-400">1</span>
        <span className="text-orange-400">{".socials "}</span>
        <span className="text-yellow-400">{"{"}</span>

        {contactItems.map(({ social, link, href }, idx) => (
          <div
            key={idx}
            className=""
          >
            <span className="mr-4 select-none text-gray-400">{idx + 2}</span>
            {`  ${social}: `}
            <a
              className="text-orange-400"
              target="_blank"
              href={href}
              rel="noreferrer"
            >{`${link}`}</a>
            <span>;</span>
          </div>
        ))}
        <span className="mr-4 select-none text-gray-400">{contactItems.length + 2}</span>
        <span className="text-yellow-400">{"}"}</span>
      </div>
    );
  }

  return (
    <div className="font-tech flex-1 bg-dark-second p-8">
      <div className="cursor-replay w-fit select-none">
        <div
          className="animate-typing w-fit overflow-hidden whitespace-pre border-r-2
         border-r-sky-400 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text 
         pr-2 text-2xl font-bold text-transparent active:animate-none"
        >
          Reach Out Via Socials
        </div>
      </div>

      <CodeStyleBlock />
    </div>
  );
}

export default ContactPage;
