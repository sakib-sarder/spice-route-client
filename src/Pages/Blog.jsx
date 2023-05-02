import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";

const Blog = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="flex">
        <div className="flex-1">
          <h1 className="text-center text-4xl font-bold text-amber-500">
            Questions & Answers
          </h1>
        </div>
        <button className="flex items-center gap-1 font-semibold text-lg bg-amber-500 px-3 py-1 rounded-md">
          <span>Download</span>
          <AiOutlineFilePdf />
        </button>
      </div>
      <div className="my-4 grid gap-3">
        <div className="bg-slate-300 p-2 rounded-lg">
          <h1 className="text-3xl py-2 font-bold  bg-gradient-to-tl from-[blue] to-[green] bg-clip-text text-transparent">
            1. Tell us the differences between uncontrolled and controlled
            components.
          </h1>
          <p className="ps-4">
            In the context of web development, the terms "controlled" and
            "uncontrolled" components refer to two different ways of handling
            form data in a React application. <br />{" "}
            <b>Controlled Components: </b>
            <br /> A controlled component is a form element (such as input,
            textarea, select) whose value is controlled by React via its props.
            In other words, the value of a controlled component is always set by
            the parent component and changes are handled through callbacks.{" "}
            <br />
            <b>Uncontrolled Components:</b> <br />
            On the other hand, an uncontrolled component is a form element whose
            value is handled by the DOM itself. In other words, the value of an
            uncontrolled component is determined by the user input and not by
            React.
          </p>
        </div>
        <div className="bg-green-400 p-2 rounded-lg">
          <h1 className="text-3xl py-2 font-bold  bg-gradient-to-bl from-[red] to-[blue] bg-clip-text text-transparent">
            2. How to validate React props using PropTypes ?
          </h1>
          <p className="ps-4">
            <b>PropTypes</b> is a built-in library in React that validates the
            data types of props passed to a component. It ensures that the data
            is of the expected type and shape, catching bugs early in
            development. PropTypes provides various validators for different
            data types, and you can specify whether a prop is required or
            optional using .isRequired. Using PropTypes makes code more
            resilient to unexpected data and easier for others to understand.
          </p>
        </div>
        <div className="bg-teal-600 p-2 rounded-lg">
          <h1 className="text-3xl py-2 font-bold  bg-gradient-to-bl from-[#3107f0] to-[#ee00c675] bg-clip-text text-transparent ">
            3. Tell us the difference between nodejs and express js.
          </h1>
          <div className="ps-4 text-[#f0fdff]">
            <span className="font-medium">Node.js and Express.js are different but related technologies used
            in web development.</span> <br />
            <p className="py-1">
              <b>Node.js</b> is a JavaScript runtime that allows developers to write
              server-side applications in JavaScript.
            </p>
            <span>
              On the other hand, <b>Express.js</b> is a web framework built on
              top of Node.js that simplifies the process of building web
              applications. It provides a set of features and tools that make it
              easier to handle requests and responses, manage routes, and handle
              middleware.
            </span>
            <br />
            <br />
            <span className="font-semibold text-lg">
              Here are some key differences between Node.js and Express.js:
            </span>
            <ul className="list-decimal ps-6">
              <li>
                Node.js is a JavaScript runtime, while Express.js is a web
                framework built on top of Node.js.
              </li>
              <li>
                Node.js provides the ability to write server-side JavaScript
                applications, while Express.js provides additional tools and
                functionality for building web applications.
              </li>
              <li>
                Node.js can be used with or without a web framework, while
                Express.js is specifically designed for building web
                applications.
              </li>
              <li>
                Express.js provides features such as middleware and routing,
                which make it easier to handle requests and responses, while
                Node.js does not have these features built-in.
              </li>
            </ul>
          </div>
              </div>
              <div className="bg-teal-400 p-2 rounded-lg">
          <h1 className="text-3xl py-2 font-bold  bg-gradient-to-bl from-[red] to-[blue] bg-clip-text text-transparent">
            4. What is a custom hook, and why will you create a custom hook?
          </h1>
          <p className="ps-4">
          A custom hook in React is a reusable function that starts with use and encapsulates logic and stateful behavior that can be shared across multiple components. Custom hooks promote code reuse, reduce code duplication, and make components more modular and easier to maintain.For that reason we would create a custom hook.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
