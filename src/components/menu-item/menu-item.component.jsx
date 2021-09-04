import React from 'react';
import './menu-item.style.scss'
const MenuItem = ({title, imgUrl,size}) => (
    <div className={`${size} item-menu`}>
        <div className='background-image'
            style={{
        backgroundImage: `url(${imgUrl})`
    }}/>
                <div className='content'>
            <h1 className='title'>{title.toUpperCase() }</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
)

export default MenuItem