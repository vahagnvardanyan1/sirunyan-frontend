import React from 'react';
import './LoadingAnimation.css';

const HexagonGrid = () => {
    const gelConfigs = [
        { classNames: 'center-gel' },
        { classNames: 'c1 r1' },
        { classNames: 'c2 r1' },
        { classNames: 'c3 r1' },
        { classNames: 'c4 r1' },
        { classNames: 'c5 r1' },
        { classNames: 'c6 r1' },
        { classNames: 'c7 r2' },
        { classNames: 'c8 r2' },
        { classNames: 'c9 r2' },
        { classNames: 'c10 r2' },
        { classNames: 'c11 r2' },
        { classNames: 'c12 r2' },
        { classNames: 'c13 r2' },
        { classNames: 'c14 r2' },
        { classNames: 'c15 r2' },
        { classNames: 'c16 r2' },
        { classNames: 'c17 r2' },
        { classNames: 'c18 r2' },
        { classNames: 'c19 r3' },
        { classNames: 'c20 r3' },
        { classNames: 'c21 r3' },
        { classNames: 'c22 r3' },
        { classNames: 'c23 r3' },
        { classNames: 'c24 r3' },
        { classNames: 'c25 r3' },
        { classNames: 'c26 r3' },
        { classNames: 'c28 r3' },
        { classNames: 'c29 r3' },
        { classNames: 'c30 r3' },
        { classNames: 'c31 r3' },
        { classNames: 'c32 r3' },
        { classNames: 'c33 r3' },
        { classNames: 'c34 r3' },
        { classNames: 'c35 r3' },
        { classNames: 'c36 r3' },
        { classNames: 'c37 r3' },
    ];

    return (
        <div className="socket">
            {gelConfigs.map((gel, index) => (
                <div key={index} className={`gel ${gel.classNames}`}>
                    <div className="hex-brick h1"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                </div>
            ))}
        </div>
    );
};

export default HexagonGrid;
