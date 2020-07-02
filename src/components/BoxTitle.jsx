import React from 'react';
import { css } from 'emotion';

export default function BoxTitle({ title, minTitle }) {
    return (
        <div className={root}>
            <h3>{title} <span>{minTitle}</span></h3>
        </div>
    );
}

const root = css`
    width: 100%;
    > h3 {
        color: #0ff7ab;
        text-shadow: 1px 2px 2px rgba(1, 1, 1, 0.12);
        margin: 0;
        > span {
            font-size: 10px;
            color: rgba(255, 255, 255, 0.75);
        }
    }

    &::after {
        height: 2px;
        width: 20px;
        background-color: #0ff7ab;
    }
`;

