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
        <div>
            <h1 className="text-center">About Page</h1>
            <p>This is a simple weather application built with JavaScript on the React Framework</p>
            
        </div>
    )
};

module.exports = About;