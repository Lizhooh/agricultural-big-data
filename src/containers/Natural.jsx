import React from 'react';

import Layout from '../layouts/Box';
import { $icon } from '../utils';

const Box = ({ icon, list = [] }) => (
    <div className='box'>
        <div className='box-icon'>
            <img src={icon} alt='' />
            {[...new Array(4)].map((v, i) => <span key={i} className='dot' />)}
        </div>
        <div className='box-right'>
            {list.map((item, index) => (
                <div key={index} className='box-item'>
                    <h4>{item.title}</h4>
                    <h2>{item.val}</h2>
                </div>
            ))}
        </div>
    </div>
);

export default function Natural() {
    const data = [
        [
            { icon: $icon('temperature'), list: [{ title: '平均气温', val: '13.7°C' }] },
            { icon: $icon('rainfull'), list: [{ title: '年均降雨', val: '384.5mm' }] },
        ],
        [
            { icon: $icon('wind'), list: [{ title: '平均风速', val: '3.4m/s' }] },
            { icon: $icon('geogarphy'), list: [{ title: '地形地貌', val: '冲击平原区' }] },
        ],
        {
            icon: $icon('riverway1'), list: [
                { title: '一级河道', val: '5个' },
                { title: '二级河道', val: '12个' },
                { title: '蓄水量', val: '1.7亿m3' },
            ]
        },
        {
            icon: $icon('forest'), list: [
                { title: '区域面积', val: '1296km2' },
                { title: '林地面积', val: '90万亩' },
            ],
        }
    ];

    return (
        <Layout title='自然条件' minTitle='Natural conditions'>
            <div className='natural'>
                {data.map((item, index) => (
                    <div className='natural-list' key={index}>
                        {Array.isArray(item) ?
                            <div className='natural-row'>
                                {item.map((v, idx) => <Box key={idx} {...v} />)}
                            </div> :
                            <div className='natural-row'>
                                <Box {...item} />
                            </div>
                        }
                    </div>
                ))}
            </div>
        </Layout>
    );
}