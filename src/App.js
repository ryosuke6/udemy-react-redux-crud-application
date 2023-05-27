import React from "react";
import PropTypes from "prop-types";
const App = () => {
  const propeties = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName", age: 3 },
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};
export default App;
