import { useState } from 'react';
import { useEffect } from 'react';

// You can work here or download the template
const Candle = () => {
    const [height, setHeight] = useState(90);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (height <= 10) {
                return setHeight(90);
            }
            setHeight((prev) => (prev -= 10));
            // console.log(height);

            return () => {
                clearTimeout(timeoutId);
            };
        }, 500);
    }, [height]);
    return (
        <div className='exercise'>
            <div className='candleContainer'>
                <div className='candle' style={{ height: `${height}%` }}>
                    <div className='flame'>
                        <div className='shadows' />
                        <div className='top' />
                        <div className='middle' />
                        <div className='bottom' />
                    </div>
                    <div className='wick' />
                    <div className='wax' />
                </div>
            </div>
        </div>
    );
};
export default Candle;
