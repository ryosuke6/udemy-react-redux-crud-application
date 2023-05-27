// import React, { Component } from "react";

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="name">Name</label>
//         <input id="name" type="text" />
//         <button
//           onClick={() => {
//             console.log("Submit");
//           }}
//         >
//           Submit
//         </button>
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>Meow!</div>;
};

export default App;
