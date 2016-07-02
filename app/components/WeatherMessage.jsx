//stateless Component
var React = require("react");

//es5 method:
// var WeatherMessage = React.createClass({
//     render: function() {
//         //var temp = this.props.temp
//         //var location = this.props.location
//         var {temp, location} = this.props;
        
//         return(
//             <div>
//                 <h3>It is {temp} in {location}</h3>
//             </div>
//         );
//     }
// });

// //es6 method:
// var WeatherMessage = (props) => {
//     var {temp, location} = props;
//         return(
//             <div>
//                 <h3>It is {temp} in {location}</h3>
//             </div>
//         );
// }

//es6 method with destructuring: 
var WeatherMessage = ({temp, location}) => {
    return(
        <div>
            <h3 className="text-center">It is {temp} in {location}</h3>
        </div>
    );
}

//no need for this(this.props) because props is being passed as an argument already

module.exports = WeatherMessage;