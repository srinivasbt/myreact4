var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(<h1>"Hello world"</h1>, document.getElementById("root"));

/*Other way of rendering (the older way)*/
var h1 = document.createElement("h1");
h1.innerHTML = "Hellow world oldway";
document.getElementById("root").appendChild(h1);
