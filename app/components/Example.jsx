//stateless component
var React = require("react");
var {Link} = require('react-router');

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
        <div>
            <h1 className="text-center">Examples</h1>
            <p>here are a couple example locations to try out</p>
            <ol>
                <li>
                    <Link to='/?location=NewYork'>New York, NY</Link>
                </li>
                <li>
                    <Link to='/?location=Seoul'>Seoul, Korea</Link>
                </li>
            </ol>
        </div>
        
    )
};

module.exports = Example;