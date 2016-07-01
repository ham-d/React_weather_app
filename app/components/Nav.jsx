//stateless component
var React = require("react");
var {Link, IndexLink} = require("react-router");

//es5 method:
// var Nav = React.createClass({
//     render: function() {
//         return(
//             <div>
//                 <h2>Nav</h2>
//                 <IndexLink to="/" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//                 <Link to="/about" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
//                 <Link to="/example" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Example</Link>
//             </div>
//         );
//     }
// });

//es6 method:
var Nav = () => {
    return(
        <div>
            <h2>Nav</h2>
            <IndexLink to="/" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            <Link to="/about" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
            <Link to="/example" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Example</Link>
        </div>
    );
}

//no need to pass in props ex: var Nav = (props) when not dealing with props
module.exports = Nav;