import React, { Component } from "react";
import FaChevronRight from "react-icons/lib/fa/chevron-right";

class HomeSingleTag extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="single-tag-div" 
                className="btn btn-success btn-block my-1 py-3" >
                <span id="single-tag" className="text-capitalize">{this.props.tag}</span>
                <FaChevronRight id="single-tag-chevron" className="float-right" />
            </div>
        );
    }
};

export default HomeSingleTag;
