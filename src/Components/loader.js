import React from "react";
import './Styles/loader.css'

const Loader = () => {
    return(
        <div id="panel" className="ui segment ">
            <p></p>
            <div className="ui active dimmer">
                <div className="ui loader"></div>
            </div>
        </div>
    );
}

export default Loader;