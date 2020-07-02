import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import AnNumber from 'animated-number-react';

import Layout from '../layouts/Box';

const MarkTitle = ({ title }) => (
    <div className='mark-title'>
        <span className='dot' />{title}
    </div>
);

export default function Economic() {
    const data = {
        industryOne: [
            { title: 'CPI（当月）', val: '3.3%' },
            { title: 'PPI（当月）', val: '-2.6%' },
            { title: 'PMI（当月）', val: '52%' },
        ],
        industryTwo: [
            { title: '第一产业', val: 17.43, unit: '亿元', num: 0.0398, color: '#0ff7ab' },
            { title: '第二产业', val: 297.62, unit: '亿元', num: 0.6793, color: '#0ff7ab' },
            { title: '第三产业', val: 122.98, unit: '亿元', num: 0.2809, color: '#0ff7ab' },
        ],
        industryThree: [
            { title: '种植业', val: 0.27, color: '#3c5' },
            { title: '畜牧业', val: 0.47, color: '#39f' },
            { title: '养渔业', val: 0.26, color: '#fa0' },
        ],
    };

    return (
        <Layout title='经济数据' minTitle='Economic data'>
            <div className='economic'>
                <div style={{ height: 5 }}></div>
                <MarkTitle title='经济状况' />
                <div className='industry-one'>
                    {data.industryOne.map((item, index) => (
                        <div className='industry-one-item' key={index}>
                            <div className='industry-one-title'>{item.title}</div>
                            <div className='industry-one-val'>{item.val}</div>
                        </div>
                    ))}
                </div>
                <div className='industry-two'>
                    {data.industryTwo.map((item, index) => (
                        <div className='industry-two-item' key={index}>
                            <div className='industry-two-circular'>
                                <CircularProgressbar
                                    value={item.num * 100}
                                    text=''
                                    strokeWidth={16}
                                    styles={buildStyles({
                                        pathColor: item.color,
                                        textColor: item.color,
                                        trailColor: 'rgba(30, 255, 60, 0.12)',
                                    })}
                                />
                            </div>
                            <div className='industry-two-pre'>{item.num * 10000 / 100 + '%'}</div>
                            <div className='industry-two-title'>{item.title}</div>
                            <div className='industry-two-val'>
                                <AnNumber
                                    value={item.val}
                                    formatValue={val => val.toFixed(2) + item.unit}
                                    duration={1250}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <MarkTitle title='产值占比' />
                <div className='industry-three'>
                    {data.industryThree.map((item, index) => (
                        <div className='industry-three-item' key={index}>
                            <CircularProgressbar
                                value={item.val * 100}
                                text={item.val * 100 + '%'}
                                strokeWidth={4}
                                styles={buildStyles({
                                    textSize: '26px',
                                    pathColor: item.color,
                                    textColor: item.color,
                                    trailColor: 'rgba(30, 255, 60, 0.12)',
                                })}
                            />
                            <div className='line' />
                            <h4>{item.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
