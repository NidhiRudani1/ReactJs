// const heading = React.createElement("h1", {id:"hed"}, "Hello from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", {id: "parent"}, 
    [React.createElement("div", {id: "child"} , 
        [React.createElement("h1", {}, "I'm a H1 Tag.") , React.createElement("h2", {}, "I'm a H2 Tag.")]),
        React.createElement("div", {id: "child"} , 
            [React.createElement("h1", {}, "I'm a H1 Tag.") , React.createElement("h2", {}, "I'm a H2 Tag.")])]
);
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);