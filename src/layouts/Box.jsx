import React from 'react';

// 布局用的盒子
export default function Box({ title, minTitle, children, style }) {
    return (
        <div className='layout-box' style={style}>
            <header className='header'>
                <h3>
                    <span>{title}</span>
                    {minTitle &&
                        <span>{minTitle}</span>
                    }
                </h3>
                <div className='line' />
            </header>
            <div className='panel'>
                {children}
            </div>
        </div>
    );
}