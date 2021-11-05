import React ,{useEffect, useRef, useState} from 'react';
import './../styles/DigitalNumber.css';
import SevenSegment from './SevenSegment';

const getNumberOfDigit=(number)=>{
   let arr=number.toString().split("");
   return [arr.length,arr]
}
const DigitalNumber = (props) => {

   const dn_ref=useRef(null);//digital number : dn
   const [ss_w,setSs_w]=useState(null);

   useEffect(()=>{
      let border_width=5;
      let [number_of_digits]=getNumberOfDigit(props.number);

      let bg_w=dn_ref.current.offsetWidth;
       let ss_w= (bg_w - (2*border_width) - ((number_of_digits+1) * (props.space_betwen ? props.space_betwen : 40) ) )/ number_of_digits;
      setSs_w(ss_w);
   },[]);
    


   return (
      <div  ref={dn_ref} className={`digital-monitor ${props.kind?props.kind:''}`}
        onClick={props.handleClick}> 
            
            {
               getNumberOfDigit(props.number)[1].map(num=>{
                  return <SevenSegment number={num} w={ss_w} h={ss_w * 2} />
               })
            }
      </div>
   )
}
export default DigitalNumber;