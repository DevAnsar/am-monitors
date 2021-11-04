import React from 'react';
const SimpleMonitor = (props) => {
   return (
      <div className={`simple-monitor ${props.kind}`}
        onClick={props.handleClick}> 
           <h4>{props.text}</h4>
      </div>
   )
}
export default SimpleMonitor;