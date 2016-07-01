//stateless component
var React = require("react");

//es5 method:
// var About = React.createClass({
//     render: function(){
//         return(
//             <h3>about</h3>
//         )
//     }
// })

//es6 method:
var About = (props) => {
    return (
        <h3>About Component</h3>
    )
};

module.exports = About;