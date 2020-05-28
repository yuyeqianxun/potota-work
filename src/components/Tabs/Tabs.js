import React, { memo, useState } from 'react'
import './index.less'
export default memo(function Tabs(props) {

    const { children, bottom, animation } = props;
    const [active, setActive] = useState(0);
    const [isani, setIsani] = useState(true)
    const changeActive = (num) => {
        setActive(num)
        if(Math.abs(num-active)===1){
            setIsani(true)
        }else{
            setIsani(false)
        }
    }

    return (
        <div className={`tabs${bottom?' tabs-bottom':''}${animation&&isani?' animation':''}`}>
            <div className="tabs-title">
            {
                children.map((item,index)=>
                    React.cloneElement(item,{active:active===index,index:index,changeActive:changeActive}))
            }
            </div>
            <div className="tabs-cont" style={{transform: `translateX(-${active*100/children.length}%)`}}>
            {
                children.map((item,index)=>{
                    return (
                        <div className="tabs-cont-item" key={index}>
                            { item.props.children }
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
})
