import React from "react";
import FaChevronRight from 'react-icons/lib/fa/chevron-right';
import { Link } from 'react-router-dom'

const SingleTag = props => {
  console.log(props);
  return (
    <li>
          {/*It’s a stateless component so you shouldn’t use
          “this” in it when referring to props. */}
         
        <div className="row list">
               <div className='col-xs-8 tags'>
                 <strong>{props.tag}</strong>  </div>
               {/* <div className='col-xs-4 icon'> <FaChevronRight onClick={(e)=>
                 {e.preventDefault(); this.selectTags()} }/></div> */}
                 <div className='col-xs-4 icon'> <Link to='/App' > <FaChevronRight
                        onClick={this.selectTags}/></Link>
                            {props.selectTag}
                        </div>
         </div>
    </li>
  );
};
export default SingleTag;