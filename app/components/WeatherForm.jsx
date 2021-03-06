var React = require("react");

var WeatherForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();
        var location = this.refs.location.value;
        var encodedLocation = encodeURIComponent(location);
        
        if(location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
            window.location.hash=`#/?location=${encodedLocation}`;
        }
    },
    render: function() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" ref="location" placeholder="Search City"/>
                    <button className="button expanded hollow" >Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;