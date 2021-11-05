import React, { useEffect, useState }  from "react";
import './../styles/DigitalNumber.css';


const SevenSegment=(props)=>{
    const ss_w=props.w;
    const ss_h=props.h;
    const s_w= 12;
    const s_h=ss_w -(s_w);

    const [A,setA]=useState(true);
    const [B,setB]=useState(true);
    const [C,setC]=useState(true);
    const [D,setD]=useState(true);
    const [E,setE]=useState(true);
    const [F,setF]=useState(true);
    const [G,setG]=useState(true);

    var display = {
        zero: function () {
          this.lightsOut();
        //   $('.A, .B, .C, .D, .E, .F').fadeIn();
            setA(true);
            setB(true);
            setC(true);
            setD(true);
            setE(true);
            setF(true);
            setG(true);
        },
        one: function () {
          this.lightsOut();
        //   $('.B, .C').fadeIn();

        setB(true);
        setC(true);

        },
        two: function () {
          this.lightsOut();
        //   $('.A, .B, .D, .E, .G').fadeIn();
        setA(true);
        setB(true);
        setD(true);
        setE(true);
        setG(true);
        },
        three: function () {
          this.lightsOut();
        //   $('.A, .B, .C, .D, .G').fadeIn();
        setA(true);
        setB(true);
        setC(true);
        setD(true);
        setG(true);
        },
        four: function () {
          this.lightsOut();
        //   $('.B, .C, .F, .G').fadeIn();
        setB(true);
        setC(true);
        setF(true);
        setG(true);
        },
        five: function () {
          this.lightsOut();
        //   $('.A, .C, .D, .F, .G').fadeIn();
        setA(true);
        setC(true);
        setD(true);
        setF(true);
        setG(true);
        },
        six: function () {
          this.lightsOut();
        //   $('.A, .C, .D, .E, .F, .G').fadeIn();
        setA(true);
        setC(true);
        setD(true);
        setE(true);
        setF(true);
        setG(true);
        },
        seven: function () {
          this.lightsOut();
        //   $('.A, .B, .C').fadeIn();
        setA(true);
        setB(true);
        setC(true);
        },
        eight: function () {
          this.lightsOut();
        //   $('.A, .B, .C, .D, .E, .F, .G').fadeIn();
        setA(true);
        setB(true);
        setC(true);
        setD(true);
        setE(true);
        setF(true);
        setG(true);
        },
        nine: function () {
          this.lightsOut();
        //   $('.A, .B, .C, .D, .F, .G').fadeIn();
        setA(true);
        setB(true);
        setC(true);
        setD(true);
        setF(true);
        setG(true);
        },
        err:function(){
            this.lightsOut();
            setA(true);
            setD(true);
            setG(true);
        },
        lightsOut: function () {
          
            setA(false);
            setB(false);
            setC(false);
            setD(false);
            setE(false);
            setF(false);
            setG(false);
        }
      };

      useEffect(()=>{

        
        switch (props.number){
            case '0':{

            display.zero();
            break;
            };
            case '1':{
                console.log('number:',props.number)
                display.one();
                break;
                };
                ;
            case '2':{

                display.two();
                break;
                };
                ;
            case '3':{

                display.three();
                break;
                };
                ;
            case '4':{

                display.four();
                break;
                };
                ;
            case '5':{

                display.five();
                break;
                };
                ;
            case '6':{

                display.six();
                break;
                };
                ;
            case '7':{

                display.seven();
                break;
                };
                ;
            case '8':{

                display.eight();
                break;
                };
                ;
            case '9':{

                display.nine();
                break;
                };
                default:{
                    display.err();
                    break;  
                }
        }
      

      },[]);

    return(
      <div style={{width:props.w,height:ss_h}} className={`seven-segment ${props.kind?props.kind:''}`}>
            
                <div style={{height:s_h ,width:s_w , left:(s_h + (s_w/5) )/2,top: -((s_h)/2)}} className={`segment A ${A?'active':''}`} />
                <div style={{height:s_h ,width:s_w,left:ss_w - (s_w/2), top: s_w /2}} className={`segment B ${B?'active':''}`} />
                <div style={{height:s_h,width:s_w ,left:ss_w - (s_w/2), top: s_h + 2 *s_w}} className={`segment C ${C?'active':''}`} />
                <div style={{height:s_h,width:s_w, left:(s_h + (s_w/5) )/2, top: (3*s_h/2) + 2 *s_w}} className={`segment D ${D?'active':''}`} />
                <div style={{height:s_h,width:s_w,left:-s_w/2, top: s_h + 2 *s_w}} className={`segment E ${E?'active':''}`} />
                <div style={{height:s_h,width:s_w ,left:-s_w/2, top: s_w /2 }} className={`segment F ${F?'active':''}`} />
                <div style={{height:s_h,width:s_w, left:(s_h + (s_w/5) )/2,top:((s_h /2 + (4*s_w /3) ))}} className={`segment G ${G?'active':''}`} />
            
      </div>
    );
}
export default SevenSegment;