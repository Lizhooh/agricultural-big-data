import React from 'react';
import AnNumber from 'animated-number-react';

import Layout from '../layouts/Box';
import { $icon, chunk } from '../utils';

const MarkTitle = ({ title }) => (
    <div className='mark-title'>
        <span className='dot' />{title}
    </div>
);

export default function Advantage() {
    const data = {
        list: [
            {
                title: '小站稻', val: 9.61, unit: '万亩', num: 0.7371,
                icon: $icon('crops2'), iconHas: $icon('crops2-gray'),
            },
            {
                title: '生猪出栏', val: 38.74, unit: '万头', num: 0.5554,
                icon: $icon('pig'), iconHas: $icon('pig-gray'),
            },
        ],
        news: chunk([
            { title: '优质小站稻', index: 1 },
            { title: '万家水稻创意产业园', index: 5 },
            { title: '“天河”水产示范区', index: 2 },
            { title: '设福农业示范区', index: 6 },
            { title: '华南生猪养殖研究中心', index: 3 },
            { title: '抗蓝耳病种猪群中心', index: 7 },
            { title: '精品小站稻种植园', index: 4 },
            { title: '农村合作社示范企业', index: 8 },
        ], 2),
    };

    return (
        <Layout title='优势产业' minTitle='Competitive industries'>
            <div className='advantage'>
                {data.list.map((item, index) => (
                    <div className='list' key={index}>
                        <MarkTitle title={item.title + '（市场占有率）'} />

                        <div className='list-item'>
                            <span className='list-val'>
                                <AnNumber
                                    value={item.val}
                                    formatValue={val => val.toFixed(2) + item.unit}
                                    duration={1250}
                                />
                            </span>
                            <div className='list-right'>
                                {[...new Array(10)].map((v, i) => (
                                    <div key={i} className='list-icons'>
                                        <img src={i < Math.floor(item.num * 10) ? item.icon : item.iconHas} alt='' />
                                        {i + 1 === Math.floor(item.num * 10) && <span>{item.num * 10000 / 100}%</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                <div>
                    <MarkTitle title='优质品牌' />
                    <div style={{ height: 8 }} />
                    {data.news.map((list, index) => (
                        <div className='news' key={index}>
                            {list.map((item, idx) => (
                                <div className='news-item' key={idx}>
                                    <span className='news-index'>{item.index}</span>
                                    <span className='news-title'>{item.title}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}