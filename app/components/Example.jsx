//stateless component
var React = require("react");

//es5 method
// var Example = React.createClass({
//     render: function(){
//         return(
//             <h3>Example</h3>
//         )
//     }
// })

//es6 method:
var Example = (props) => {
    return(
        <h3>Example Component</h3>
    )
};

module.exports = Example;