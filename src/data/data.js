import { Languages } from "lucide-react";

export const topics = {
  html: {
    title: "HTML",
    description:
      "HTML (HyperText Markup Language) is the standard language used to create the structure of web pages using elements like headings, paragraphs, links, and images.",
    code: `
<div>
  <h1>Hello World</h1>
  <p>This is a simple HTML structure.</p>
</div>`,
  },

  css: {
    title: "CSS",
    description:
      "CSS (Cascading Style Sheets) is used to style and layout web pages, for example to change colors, fonts, spacing, and positioning.",
    code: `
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: blue;
}`,
  },

  javascript: {
    title: "JavaScript",
    description:
      "JavaScript is a programming language used to make web pages interactive. It can update content, control multimedia, and handle events.",
    code: `
const userName = "Rajal";

function greet() {
  console.log("Hello " + userName);
}}

greet();`,
  },

  react: {
    title: "React",
    description:
      "React is a JavaScript library for building user interfaces using reusable components and managing state efficiently.",
    code: `
function App() {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}`,
  },

  typescript: {
    title: "TypeScript",
    description:
      "TypeScript is a superset of JavaScript that adds static typing, helping developers catch errors early and write more maintainable code.",
    code: `
function greet(name: string): string {
  return "Hello " + name;
}

greet("Rajal");`,
  },

  tailwind: {
    title: "Tailwind Css",
    description:
      "Tailwind CSS is a utility-first CSS framework that allows you to build designs directly in your markup using predefined classes.",
    code: `
<div class="flex items-center justify-center h-screen bg-gray-100">
  <h1 class="text-2xl font-bold text-blue-500">
    Hello Tailwind
  </h1>
</div>`,
  },
};

export const projects = [
  {
    id: 1,
    name: "Todo List",
    Description:
      "App where user can add, update , view the todo and let`s user delelte the task on complete",
    image: "/Images/normal.png",
    Languages: ["Html", "CSS", "Javascript", "typescript", "React"],
    URL: "#",
    githubUrl: "#github",
  },
  {
    id: 2,
    name: "Image slider",
    Description:
      "Made a image slider in react with full functionality for learning and get more concept",
    image: "/Images/normal.png",
    tags: ["React", "CSS"],
    URL: "#",
    githubUrl: "#github",
  },
];
