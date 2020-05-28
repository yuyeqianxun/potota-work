import React, { memo, useState, useEffect } from "react";
import "./index.less";
export default memo(function Scroll(props) {

    const [coords, setCoords] = useState(0);

    const [pull, setPull] = useState(0);

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        document.querySelector('.scroll-cont').addEventListener("touchstart",function(e){
            if(this.scrollTop<=0){
                setCoords(e.targetTouches[0].clientY)
            }
        })
        document.querySelector('.scroll-cont').addEventListener("touchmove",function(e){
            if(this.scrollTop<=0){
                let pullLength = e.targetTouches[0].clientY-coords
                if(pullLength<=65&&pullLength>0){
                    setPull(e.targetTouches[0].clientY-coords)
                    if(pullLength>60){
                        setLoading(true)
                    }
                }
            }
        })
        document.querySelector('.scroll-cont').addEventListener("touchend",function(e){
            if(loading&&this.scrollTop<=0){
                setPull(60)
                setCoords(0)
            }else{
                setPull(0)
                setCoords(0)
            };
        })
    })
    
  return (
    <div className="scroll">
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="scroll-cont" style={{transform:`translateY(${pull}px)`}}>
        {props.children}
        <div className="end">再怎么样也没有啦</div>
      </div>
    </div>
  );
});
