import React from "react";
const App = () => {
  const propeties = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName" },
  ];
  return (
    <div>
      {propeties.map((propety, index) => {
        return <User name={propety.name} age={propety.age} key={index} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      Hi,I'm{props.name},and {props.age} years old
    </div>
  );
};

User.defaultProps = {
  age: 1,
};

export default App;
