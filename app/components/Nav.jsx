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
var Nav = React.createClass({
    onSearch: function(e) {
        e.preventDefault();
    },
    
    render: function(){
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Weather App
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/example" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Example</Link>
                        </li>
                        <li>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="search city" />
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

//no need to pass in props ex: var Nav = (props) when not dealing with props
module.exports = Nav;