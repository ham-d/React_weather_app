var React = require('react');
var ReactDOM = require("react-dom");
var { Route, Router, IndexRoute, hashHistory } = require("react-router");
// var Main = require('./components/Main') but shortcutted through webpack;
var Main = require('Main');
var Weather = require("Weather");
var About = require("About");
var Example = require("Example");

//load foundation
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

//app css
//style!, css!, sass! are loaders, helps with bundling
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <Router history = {hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Weather} />
            <Route path="about" component={About}/>
            <Route path="example" component={Example}/>
        </Route>
    </Router>, document.getElementById('app')
);