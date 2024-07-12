import React from "react";
import ReactDOM from "react-dom/client";

/*const heading = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"}, [React.createElement("h1", {}, "asd"), React.createElement("h2", {}, "dasd")]));
*/

const Content = () => (
    <div id="content"> 
        <h2 className="headers">This is content component</h2>
    </div>
);

const title = (
    <>
        <h1 id="heading2" className="headers">This is the JSX title</h1>
        {Content()}
    </>
);

console.log(title);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(title);