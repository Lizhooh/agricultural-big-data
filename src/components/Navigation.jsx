import React from 'react';

import { $icon } from '../utils';


export default function Navigation() {
    return (
        <div className='navigation'>
            <div className='center'>
                <div className='logo'>
                    <img src={require('../assets/icon/crops1.svg')} alt='' />
                </div>
                <div className='title'>
                    <p>智慧农业大数据平台 · 大屏中心</p>
                    <p>Smart Agriculture Big Data Platform · Large Screen Center</p>
                </div>
            </div>
            <div className='tool'>
                <div className='tool-item'>
                    <img src={$icon('setting')} alt='' />
                    <span>设置</span>
                </div>
                <div className='tool-item'>
                    <img src={$icon('poweroff')} alt='' />
                    <span>退出</span>
                </div>
            </div>
        </div>
    );
}

