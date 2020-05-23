import React, { memo } from 'react'
// import './index.less'
export default memo(function Tabs(props) {

    const { children } = props;
    let active = 0;
    return (
        <div className="tabs">
            <div className="tabs-title">
            {
                children.map((item,index)=>
                    React.cloneElement(item,{active:active===index}))
            }
            </div>
            <div className="tabs-cont">
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
