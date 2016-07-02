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
        var location = this.refs.search.value;
        //encode URI helps transform strings to readable code. Ex: spaces turn to %20
        var encodedLocation = encodeURIComponent(location);
        if(location.length > 0){
            this.refs.search.value = '';
            window.location.hash=`#/?location=${encodedLocation}`;
        } 
        
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
                                <input type="search" ref="search" placeholder="search city" />
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