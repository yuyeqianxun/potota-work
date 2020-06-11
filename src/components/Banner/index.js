import React, { memo, useState, useEffect, useRef } from 'react'
import './index.less'

export default memo(function Banner(props) {

    const { banners, auto, time, dot, loop } = props
    const [record, setRecord] = useState({x:0, y:0});
    const [current, setCurrent] = useState(0);
    const container = useRef(null);
    const config = useRef(null)
    const timer = useRef(null);
    const reback = useRef(null);

    useEffect(() => {
        let item = container.current.childNodes[0];
        let itemWith = item.offsetWidth + item.offsetLeft*2;
        let windowWidth = window.screen.width;
        let unit = itemWith-(windowWidth-itemWith)/2;
        const dom = document.querySelector(".banner");
        if(loop){
            banners.unshift(banners[banners.length-1])
        }
        config.current = {
            unit,
            time,
            banners,
            dot,
            auto
        }
        loop&&loopFn(unit);
        auto&&autoFn(time,unit);
        dom.addEventListener('touchstart', onStart, false);
        dom.addEventListener('touchstart', onMove, false);
        dom.addEventListener('touchstart', onEnd, false);
        return () => {
            timer&&clearInterval(timer.current);
            dom.removeEventListener('touchstart', onStart, false);
            dom.removeEventListener('touchstart', onMove, false);
            dom.removeEventListener('touchstart', onEnd, false);
        }
    },[])

    useEffect(() => {
        const { banners, loop } = config.current;
        if(loop&&current===banners.length){
            reback&&clearTimeout(reback.current)
            reback.current = setTimeout(()=>{
                container.current.style.transitionProperty = 'none';
                setCurrent(1)
            },550)
        }
        return () => {
            reback&&clearTimeout(reback.current);
        }
    }, [current])

    const setTransition = () => {

    }

    const loopFn = (unit) => {
        setCurrent(1)
        container.current.style.transform = `translate3d(${-unit}px,0,0)`;
    }
    
    const autoFn = (time,unit) => {
        timer.current = setInterval(()=>{
            container.current.style.transform = `translate3d(${unit}px,0,0)`;
            setCurrent(prevCurrent=>prevCurrent++);
        },time*1000||3000)
    }

    const onStart = (e) => {
        console.log(e)
    }

    const onMove = (e) => {

    }

    const onEnd = (e) => {

    }
    const { banners, dot }=config.current

    return (
        <div className="banner">
            <div className="banner-list" ref={container}>
                {
                    banners.map(item=>(
                        <img src={item.url} alt="" key={item.id}/>
                    ))
                }
            </div>
            {
                dot&&<div className="banner-dot">
                    {
                        banners.map((item,index)=>(
                            <span key={item.id} className={`dot${current===index?' active-dot':''}`}></span>
                        ))
                    }
                </div>
            }
            
        </div>
    )
})
