//stateless Component
var React = require("react");
var Nav = require("Nav");

// var Main = React.createClass({
//     render: function(){
//         return (
//             <div>
//                 <Nav />
//                 <h2>Main Component</h2>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

//es6 method:
var Main = (props) => {
    return (
        <div>
            <Nav />
            <h2>Main Component</h2>
            {props.children}
        </div>
    );
}
//no need for this(this.props) because props is being passed as an argument already

module.exports = Main;