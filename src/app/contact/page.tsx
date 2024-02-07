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
    <div className="font-tech bg-dark-second p-8">
      <div className="w-fit bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-2xl font-bold text-transparent">
        Reach Out Via Socials
      </div>
      <CodeStyleBlock />
    </div>
  );
}

export default ContactPage;
