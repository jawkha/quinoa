import React, { Component } from "react";

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
            <li className='tagList'>
                <div className="row tag" onClick={this.handleClick}>
                    <div className='col-xs-8'>
                        <strong>{this.props.tag}</strong>
                        <p>{this.props.tag.length} item</p>
                     </div>
                     <div className='col-xs-4'>
                          {this.props.selectTag}
                      </div>
                 </div>
             </li>
        );
    }
};

export default HomeSingleTag;