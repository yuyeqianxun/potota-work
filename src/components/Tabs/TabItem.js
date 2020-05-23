import React, { memo } from 'react'
import './item.less'
export default memo(function TabItem(props) {

    const { title, line, icon, active } = props

    return (
        <div className={`tabs-title-item${line?' item-line':''}${icon?' tabs-icon-item':''}${active?' item-active':''}`}>
            { title }
            { icon&&<i className={`iconfont icon-${icon}`}></i> }
        </div>
    )
})
