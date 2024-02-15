import Link from "next/link";

export function Projects() {
  const data = {
    projects: [
      {
        name: "Opinio",
        href: "projects/opinio",
        description:
          "Opinio is a platform for employees to give feedback to the software development team of internal developed software tools. The software development team can then use this feedback to improve the software tools. The tool can be easily implemented in the internal software tool and provides different insights in how the employees use the internal software, current bugs, trends in the joy of using the software and much more.",
        role: "Full Stack Software Developer",
        roleDescription: "",
        teamsize: "3",
        context: "CODE University of Applied Sciences",
        contextLink: "https://code.berlin",
        learned:
          "First experience of working as a software developer in a team. Learned how to collaborate effectively with other developers and how to use Git(hub) efficiently.",
        time: "January 2023 - Present",
        url: "https://app.getopinio.com/",
      },
      {
        name: "//Slash Hackathon 2022",
        href: "projects/slash",
        description:
          "Event Management and various other tasks at //Slash. //Slash is a student initiative at CODE University at which we are organizing a sustainability hackathon for 400 students and young professionals",
        role: "Event Managment & Partnerships",
        roleDescription:
          "Managing several areas of the event from catering, operative work, hands on work on the event and partnerships with companies.",
        teamsize: "10",
        context: "CODE University of Applied Sciences",
        contextLink: "https://code.berlin",
        learned:
          "Teamwork, Eventmanagement, Partnerships, Sales & Keeping cool in stressfull situations",
        time: "October 2021 - Present",
        url: "https://www.slash.berlin",
      },
      {
        name: "Spotify Data Analysis",
        href: "projects/spotify",
        description:
          "This project was part of the course 'Data Science' at the CODE University of Applied Sciences. The goal of the project was to analyze our own data from Spotify and to find interesting insights, see trends & anomalies.",
        role: "Data Scientist",
        roleDescription:
          "Data Science in Python (Pandas, Numpy, Matplotlib, Seaborn)",
        teamsize: "2",
        context: "CODE University of Applied Sciences",
        contextLink: "https://code.berlin",
        learned:
          "Extensive experience in Data Science. Data cleaning, statistical methods, visualizing methods and how to present data in a meanigful way.",
        time: "August 2022 - December 2022",
        url: "https://github.com/Melvin2306/spotify_data_analysis",
      },
      {
        name: "Peaches",
        href: "projects/peaches",
        description:
          "Peaches was a research project in which we explored the exact reasons behind the so called 'Orgasm Gap' between women and men. We conducted interviews with women & men both either single or in a relationship. Based on this research we developed various concepts for products that could help to create more equality in the bedroom, unfortunately, we did not find a solution that we were happy with.",
        role: "Product Manager",
        roleDescription:
          "Worked as a Product Manager focussing on qualitative research",
        teamsize: "3",
        context: "CODE University of Applied Sciences",
        contextLink: "https://code.berlin",
        learned: "Research, Teamwork, Idea Iteration",
        time: "January 2021 - December 2022",
        url: "",
      },
      {
        name: "Simulation of the Transformation of the Hydrogen Infrastructure in Germany",
        href: "projects/transformation",
        description:
          "This project was part of my studies at HSW where we were simulating the transformation of the current natural gas infrastructure into a hydrogen infrastructure. We simulated the transformation together with the Germany company GASAG",
        role: "Team member",
        roleDescription:
          "Research in the current status of the natural gas infrastructure, possibilities to transform the current infrastructure, calculations of economic implecations",
        teamsize: "7",
        context: "HSW - Hochschule Weserbergland",
        contextLink: "https://www.hsw-hameln.de",
        learned:
          "Understanding of energy infrastructure, Calculation of capital investments in infrastructure.",
        time: "October 2020 - May 2021",
        url: "",
      },
    ],
  };

  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold">Projects</h2>
      {data.projects.map((pro) => (
        <div
          key={pro.name}
          className="border border-emerald-400/20 rounded-lg p-2 my-2"
        >
          <h3 className="text-xl font-semibold">
            <Link href={pro.href}>{pro.name}</Link>
          </h3>
          <p>{pro.description}</p>
          <p>
            {pro.role} in a team of {pro.teamsize}
          </p>
          <p>
            <a href={pro.contextLink}>{pro.context}</a>
          </p>
          <p>{pro.learned}</p>
          <p>{pro.time}</p>
        </div>
      ))}
    </div>
  );
}
