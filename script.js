const parentDiv = React.createElement("div", { id: "parent" },
  [
    React.createElement("div", { id: "child1" },
      [
        React.createElement("h1", {}, "Hey, I am Ankit"),
        React.createElement("h2", {}, "Hey, I am Rohan")
      ]),
      
    React.createElement("div", { id: "child2" },
      [
        React.createElement("h1", {}, "Hey, I am Ankit"),
        React.createElement("h2", {}, "Hey, I am Rohan")
      ])
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parentDiv);



// let root = document.getElementById("root");

// let heading = document.createElement("h1");

// heading.innerHTML = "hey, I am Ankit";

// root.appendChild(heading);