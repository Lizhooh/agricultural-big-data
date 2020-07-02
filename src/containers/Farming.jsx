import React from 'react';
import AnNumber from 'animated-number-react';

import Layout from '../layouts/Box';
import { $icon } from '../utils';

export default function Farming() {
    const data = [
        { icon: $icon('sell'), title: '加工销售', val: 203 },
        { icon: $icon('company'), title: '龙头企业', val: 18 },
        { icon: $icon('farm'), title: '家庭农场', val: 117 },
        { icon: $icon('crops1'), title: '合作社区', val: 1290 },
    ];

    return (
        <Layout title='农业产品化' minTitle='Agricultural productization'>
            <div className='farming'>
                {data.map((item, index) => (
                    <div className='farming-item' key={index}>
                        <div className='farming-icon'>
                            <img src={item.icon} alt='' />
                        </div>
                        <div className='farming-right'>
                            <div className='farming-title'>{item.title}</div>
                            <div className='farming-val'>
                                <AnNumber
                                    value={item.val}
                                    formatValue={val => val.toFixed(0) + ' 家'}
                                    duration={1250}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}