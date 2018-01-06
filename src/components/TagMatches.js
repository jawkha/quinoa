import React, { Component } from 'react';
import axios from 'axios';

import NonHomeHeader from './nestedComponents/NonHomeHeader';
import ActiveTag from './nestedComponents/ActiveTag';
import BarCharts from './nestedComponents/BarCharts';

class TagMatches extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTag: this.props.history.location.state.activeTag,
            tagMatches: []
        }
        this.getTagMatches = this.getTagMatches.bind(this);
    }

    componentWillMount() {
        this.getTagMatches(this.state.activeTag);
    }

    getTagMatches(tag) {
            axios.get(`/${this.state.activeTag}`).then(res => {
              console.log(res.data);
              const tagMatches = res.data;
              this.setState({ tagMatches: tagMatches });
            });
        }

    render() {
        return (
            <div>
                <NonHomeHeader />
                <ActiveTag activeTag={this.state.activeTag} />
                <BarCharts tagMatches={this.state.tagMatches} />
            </div>
        );
    }
};

export default TagMatches;