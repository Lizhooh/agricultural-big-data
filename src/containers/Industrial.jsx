import React from 'react';
import AnNumber from 'animated-number-react';

import Layout from '../layouts/Box';

const MarkTitle = ({ title }) => (
    <div className='mark-title'>
        <span className='dot' />{title}
    </div>
);

export default function Industrial() {
    const data = {
        l1: [
            { title: '总人数', val: 2.44, unit: '万' },
            { title: '占地面积', val: 62.31, unit: '万亩' },
            { title: '支配收入', val: 2.42, unit: '万元' },
        ],
        l2: [
            { title: '耕地面积', val: 23.78, unit: '万亩' },
            { title: '小站稻', val: 9.61, unit: '万亩' },
            { title: '生猪出栏', val: 38.74, unit: '万头' },
        ],
    };
    return (
        <Layout title='产业园区' minTitle='Industrial Park'>
            <div className='industrial'>
                <MarkTitle title='园区概况' />
                <div className='list'>
                    {data.l1.map((item, index) => (
                        <div className='list-item' key={index}>
                            <div className='list-title'>{item.title}</div>
                            <div className='list-val'>
                                <AnNumber
                                    value={item.val}
                                    formatValue={val => val.toFixed(2) + item.unit}
                                    duration={1250}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className='list' style={{ padding: '0 12px' }}>
                    {data.l2.map((item, index) => (
                        <div className='list-item' key={index}>
                            <div className='list-title'>{item.title}</div>
                            <div className='list-val'>
                                <AnNumber
                                    value={item.val}
                                    formatValue={val => val.toFixed(2) + item.unit}
                                    duration={1250}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <MarkTitle title='基础设施' />
                <div style={{ height: 16 }}></div>
                <div className='wordcloud'>
                    <span className='w1'>中蒙俄经济走廊节点</span>
                    <span className='w2'>海陆联运大通道</span>
                    <span className='w3'>一路一带</span>
                    <span className='w4'>消费终端</span>
                    <span className='w5'>内需建设之路</span>
                    <span className='w6'>大数据新经济</span>
                    <span className='w7'>抗病毒疫苗</span>
                </div>
            </div>
        </Layout>
    );
}