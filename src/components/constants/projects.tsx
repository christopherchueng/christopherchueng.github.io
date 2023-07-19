export type Project = {
  image: string;
  title: string;
  link: string;
  technologies: string[];
  description: string;
};

const one: Project = {
  image: "/images/timeout.png",
  title: "Timeout",
  link: "https://timeout.onrender.com",
  technologies: ["Javascript", "React", "Redux", "Python"],
  description:
    "Inspired by Apple's Clock Alarm app, users will be able to create and toggle between alarms. Users will also be able to group alarms and simultaneously toggle them through Timeout's feature, Alarmlists!",
};

const two: Project = {
  image: "/images/sea.png",
  title: "Sea",
  link: "https://sea-coin.herokuapp.com/",
  technologies: ["Javascript", "React", "Redux", "Python"],
  description:
    "A Robinhood clone that allow users to experience a mock-up of the American financial market through trading a variety of stocks under the S&P 500 Index.",
};

export const projects = [one, two];
