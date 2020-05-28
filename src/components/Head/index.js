import React, { memo } from 'react'
import './index.less'

export default memo(function Head(props) {

    const { left, right } = props

    return (
        <div className="head">
            {
                Array.isArray(left.icon) ?
                left.icon.map(item=>(
                    <i className={"iconfont icon-left icon"+item}></i>
                )) :
                <i className={"iconfont icon-left icon"+left.icon}></i>
            }
            {
                Array.isArray(right.icon) ?
                right.icon.map(item=>(
                    <i className={"iconfont icon-right icon"+item}></i>
                )) :
                <i className={"iconfont icon-right icon"+right.icon}></i>
            }
        </div>
    )
})
