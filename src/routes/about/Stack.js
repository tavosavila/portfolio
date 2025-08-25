import { React } from 'react'
const stack = [
  "Java",
  "Spring Boot",
  "Cloud (AWS, Azure)",
  "Docker",
  "SQL & NoSQL",
  "TDD",
  "Software Architecture",
  "Algorithms & Data Structures",
  "Leadership & Soft Skills",
  "MongoDB",
  "REST APIs",
  "AI/ML Tooling"
];


const Stack = () => {
  return (
    <section>
      <h3 className="title-font white-text ">
        Here are a few tools & technologies I’ve been working with:
      </h3>
      <ol className="stack-list">
        {stack.map((item, index) =>
          (<li key={index}>{item}</li>)
        )}
      </ol>
    </section>
  );
};

export default Stack;
