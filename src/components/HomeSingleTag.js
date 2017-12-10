import React, { Component } from "react";
import FaChevronRight from "react-icons/lib/fa/chevron-right";

class HomeSingleTag extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        let tag = this.props.tag;
        this.props.findTaggedCategories(tag);
    }

    render(){
        return (
            <div id="single-tag-div" 
                className="btn btn-success btn-block my-1 py-3"
                onClick={this.handleClick}>
                <span id="single-tag" className="text-capitalize">{this.props.tag}</span>
                <FaChevronRight id="single-tag-chevron" className="float-right" />
            </div>
        );
    }
};

export default HomeSingleTag;
