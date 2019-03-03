import React, { useState } from 'react';
import { Collapse, CardBody, Card, Container } from 'reactstrap';

const Collapsible = (props) => {  
  const [collapse, onToggle] = useState(false);
      
  return (
      <div>
        <ul className="list-group">
          <li
            className={`list-group-item ${collapse ? "active" : ""}`}
            onClick={() => onToggle(!collapse)}
          >
          {props.question}
            <i className={`float-right fa ${collapse ? "fa-angle-up" : "fa-angle-down"}`}  />
          </li>
        </ul>
        <Collapse isOpen={collapse}>{props.children}</Collapse>
      </div>
  );
};


const App = () => {
  const qa = [
    {
        question: "What is ReactJS and Why Should We Use it?",
        answer: "ReactJS basically is an open-source JavaScript library which is used for building user interfaces specifically for single page applications. It’s used for handling view layer for web and mobile apps. React also allows us to create reusable UI components. React was first created by Jordan Walke, a software engineer working for Facebook. React first deployed on Facebook’s newsfeed in 2011 and on Instagram.com in 2012."
    },
    {
        question: "What are React Hooks?",
        answer: "React Hooks were introduced at React Conf October 2018 as proposal for React 16.7. as a way to use state and side-effects in React function components. Whereas function components have been called functional stateless components (FSC) before, they are finally able to use state with React Hooks. Therefore, many people refer to them as function components now."
    },
    {
        question: "Why React Hooks?",
        answer: "React Hooks were invented by the React team to introduce state management and side-effects in function components. It’s their way of making it more effortless to use only React function components without the need to refactor a React function component to a React class component for using lifecycle methods, in order to use have side-effects, or local state. React Hooks enable us to write React applications with only function components."
    },
  ];

  return (
    <div className="mt-5">
      <Container>
        {qa.map((e, i) => (
          <Collapsible question={e.question} key={i}>
          <Card>
            <CardBody>
              {e.answer}
            </CardBody>
          </Card>
          </Collapsible>
        ))}
      </Container>
    </div>
  );
}

export default App;
