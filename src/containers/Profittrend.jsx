import React, { useRef, useEffect } from 'react';
import { Chart } from '@antv/g2';
import AnNumber from 'animated-number-react';

import Layout from '../layouts/Box';
import { $icon } from '../utils';

const MyChart = () => {
    const ref = useRef(null);
    const data = [
        { time: '1 月', type: '蔬菜类', value: 12000 },
        { time: '1 月', type: '肉禽类', value: 10000 },
        { time: '2 月', type: '蔬菜类', value: 7000 },
        { time: '2 月', type: '肉禽类', value: 4000 },
        { time: '3 月', type: '蔬菜类', value: 5000 },
        { time: '3 月', type: '肉禽类', value: 8000 },
        { time: '4 月', type: '蔬菜类', value: 8000 },
        { time: '4 月', type: '肉禽类', value: 9000 },
        { time: '5 月', type: '蔬菜类', value: 7000 },
        { time: '5 月', type: '肉禽类', value: 8000 },
        { time: '6 月', type: '蔬菜类', value: 14000 },
        { time: '6 月', type: '肉禽类', value: 8000 },
        { time: '7 月', type: '肉禽类', value: 23000 },
        { time: '7 月', type: '蔬菜类', value: 17000 },
    ];

    useEffect(() => {
        if (!ref) return;

        const chart = new Chart({
            container: ref.current,
            autoFit: true,
            height: 260,
        });
        chart.data(data);
        chart.scale('value', { alias: '金额（千元）' });
        chart.axis('time', { tickLine: null });
        chart.axis('value', {
            label: {
                formatter: text => text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'),
            },
            title: {
                offset: 80,
                style: { fill: '#aaa' },
            },
        });
        chart.legend({ position: 'top' });
        chart.tooltip(false);
        chart.interaction('active-region');
        chart
            .interval()
            .adjust('stack')
            .position('time*value')
            .color('type', ['#0fc7abcc', '#0ff7abdd']);
        chart.render();
    }, [data]);

    return (
        <div ref={ref} />
    );
}

export default function Profittrend() {
    const data = {
        head: [
            { icon: $icon('crops5'), title: '蔬菜类', num: 0.37 },
            { icon: $icon('pig'), title: '肉禽类', num: 0.63 },
        ],
        // 蔬菜
        veget: [
            { title: '菜心', yo: 0.015, mo: 0.012 },
            { title: '水稻', yo: 0.072, mo: -0.008 },
            { title: '生菜', yo: -0.022, mo: -0.024 },
            { title: '芹菜', yo: 0.009, mo: -0.006 },
            { title: '韭菜', yo: 0.032, mo: 0.019 },
        ],
        // 肉禽
        meat: [
            { title: '猪肉', yo: 0.045, mo: -0.009 },
            { title: '牛肉', yo: 0.037, mo: -0.012 },
            { title: '鸡肉', yo: 0.012, mo: 0.004 },
            { title: '鱼肉', yo: -0.011, mo: -0.016 },
            { title: '羊肉', yo: -0.018, mo: 0.008 },
        ],
        devote: [
            { title: '猪肉', num: 0.6212 },
            { title: '牛肉', num: 0.2253 },
            { title: '韭菜', num: 0.0848 },
            { title: '鸡肉', num: 0.0691 },
            { title: '菜籽', num: 0.0211 },
        ],
    };

    const rootStyle = {
        margin: '0 auto', maxWidth: 720
    };

    return (
        <Layout title='盈利趋势' minTitle='Profit trend' style={rootStyle}>
            <div className='profittrend'>
                <div className='header'>
                    <div className='header-left'>
                        <div className='header-icon'>
                            <img src={data.head[0].icon} alt='' />
                        </div>
                        <div>{data.head[0].title}</div>
                    </div>
                    <div className='header-pre'>
                        <div className='header-pre-line'>
                            <div style={{ width: data.head[0].num * 100 + '%' }}>
                                <AnNumber
                                    value={data.head[0].num * 100}
                                    formatValue={val => val.toFixed(0) + '%'}
                                    duration={1250}
                                />
                            </div>
                            <div style={{ width: data.head[1].num * 100 + '%' }}>
                                <AnNumber
                                    value={data.head[1].num * 100}
                                    formatValue={val => val.toFixed(0) + '%'}
                                    duration={1250}
                                />
                            </div>
                        </div>
                        <p>{data.head[0].title}/{data.head[1].title}盈利比例</p>
                    </div>
                    <div className='header-right'>
                        <div className='header-icon'>
                            <img src={data.head[1].icon} alt='' />
                        </div>
                        <div>{data.head[1].title}</div>
                    </div>
                </div>
                <div className='chart'>
                    <MyChart />
                </div>
                <div className='dataview'>
                    <div className='table'>
                        <h3 className='table-title'>当月增速同比/环比</h3>
                        <div className='table-panel'>
                            <div className='table-row'>
                                <span>名称</span>
                                <span>同比增速</span>
                                <span>环比增速</span>
                            </div>
                            {data.veget.map((item, index) => (
                                <div className='table-row' key={index}>
                                    <span>{item.title}</span>
                                    <div>
                                        <span>{item.yo * 10000 / 100}%</span>
                                        <img src={$icon(item.yo > 0 ? 'triangle-up' : 'triangle-down')} />
                                    </div>
                                    <div>
                                        <span>{item.mo * 10000 / 100}%</span>
                                        <img src={$icon(item.mo > 0 ? 'triangle-up' : 'triangle-down')} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='devote'>
                        <h3 className='devote-title'>盈利贡献前五</h3>
                        <div className='devote-list'>
                            {data.devote.map((item, index) => (
                                <div className='devote-item' key={index}>
                                    <div className='devote-text'>
                                        <span>{item.num * 10000 / 100}%</span>
                                        <span>{item.title}</span>
                                    </div>
                                    <div className='devote-line'>
                                        <div style={{ width: item.num * 10000 / 100 + '%' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}