import React, { memo } from 'react'
import './item.less'
export default memo(function TabItem(props) {

    const { title, line, icon, active, index, changeActive } = props

    return (
        <div className={`tabs-title-item${line?' item-line':''}${icon?' tabs-icon-item':''}${active?' item-active':''}`} onClick={() => changeActive(index)}>
            { icon&&<i className={`iconfont ${icon}`}></i> }
            { !icon&&title }
        </div>
    )
})
