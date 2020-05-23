import React, { memo } from 'react'
// import './index.less'

export default memo(function Square(props) {

    const { img, name } = props

    return (
        <div className="square">
            {
                img&&<img className="square-img" src={img} alt=""/>
            }
            {
                name&&<p className="square-name">{name}</p>
            }
        </div>
    )
})
