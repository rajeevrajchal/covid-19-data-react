import React from 'react';
import { Link } from "react-router-dom";
import HowItSpread from './HowItSpreds';
import Protection from './Protection';

export default function Prevention() {

    return (
        <div className="prevention">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand" href="#">Corona Virus Update</span>
                <div className="search-section">
                    <Link to="/" className="btn btn-outline-success my-2 my-sm-0" type="submit">Back</Link>
                </div>
            </nav>
            <div className="container">
                <HowItSpread />
                <Protection/>
            </div>
            <br />
            <h3 className="video-title">Know What It Is??</h3>
            <br/>
            <div className="video">
                <iframe width="741" height="417" src="https://www.youtube.com/embed/9Ay4u7OYOhA?list=PLvrp9iOILTQaJa78zFQ0QgvShQ2HEwHxP" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <br/>
            <div className="video-title formoreinfo">
                <h5>For more Info Please visit <a href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html">Center For Disease Control and Prevention (CDC)</a></h5>
            </div>
            <br/>
            <footer className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand" href="#">Corona Virus Update</span>
                <span className="navbar-brand"> Brought to you By <a href="https://itglance.net/">Itglance</a></span>
            </footer>

        </div>
    )
}