import React, { Component } from "react";

class SingleTag extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        let tag = this.props.tag;
        this.props.history.push({
            pathname: `/${tag}`,
            state: {activeTag: tag}
        }); // this will change the url and result in rendering of new view
    }

    render(){
        return (
                <div className="tag-card mx-2"
                    onClick={this.handleClick}>
                    <p className="tag-name text-capitalize py-4 px-3"><strong>{this.props.tag}</strong></p>
                </div>
        );
    }
};

export default SingleTag;