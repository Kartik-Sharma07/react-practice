const heading = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"}, [React.createElement("h1", {}, "hello"), React.createElement("h2", {}, "hello")]));

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(heading);