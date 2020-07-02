import React, { useRef, useEffect } from 'react';
import { RangeBar } from '@antv/g2plot';
import { css } from 'emotion';

export default function App() {
    const ref = useRef(null);
    const data = [
        { type: '分类一', values: [76, 100] },
        { type: '分类二', values: [56, 108] },
        { type: '分类三', values: [38, 129] },
        { type: '分类四', values: [58, 155] },
        { type: '分类五', values: [45, 120] },
        { type: '分类六', values: [23, 99] },
        { type: '分类七', values: [18, 56] },
        { type: '分类八', values: [18, 34] },
    ];
    useEffect(() => {
        console.log('???');
        if (!ref.current) return;
        const bp = new RangeBar(ref.current, {
            title: {
                visible: true,
                text: '区间条形图',
            },
            data: data,
            xField: 'values',
            yField: 'type',
        });
        bp.render();
    }, []);

    return <div className={root} ref={ref} />;
}

const root = css`
    width: 700px;
    height: 500px;
`;
