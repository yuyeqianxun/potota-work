import React, { memo } from 'react'
import './index.less'

export default memo(function Contain(props) {

    const { title, children } = props

    return (
        <div className="contain">
            <div className="contain-title">
                { title }
                <i className="iconfont iconxiangxi"></i>
            </div>
            { children }
        </div>
    )
})
