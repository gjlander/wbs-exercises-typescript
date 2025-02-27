import { useState } from 'react';
import LightBulb from './components/LightBulb';
import './style.css';

const App = () => {
    const [lightOn, setLightOn] = useState(false);
    const toggleLight = () => {
        setLightOn((prev) => !prev);
    };
    return (
        <>
            <button onClick={toggleLight}>Switch</button>
            <LightBulb lightOn={lightOn} />
        </>
    );
};

export default App;
