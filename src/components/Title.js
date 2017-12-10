import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Title extends Component {
    

    render() {
        return(
            <div className="container">
                <div className='row'>
                    <div className="col-xs-2">
                        <Link to='/App' >Back</Link>
                            </div>
                    <div className="col-xs-10">QUINOA</div>
                </div>
            </div>
        );
    }
}

export default Title;