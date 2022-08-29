import React, {useState} from 'react';
import Joyride, {STATUS} from "react-joyride";

const Tooltip = ({steps}) => {
    const [run, setRun] = useState(false);

    const handleClickStart = (event) => {
        event.preventDefault();
        setRun(true);
    };

    const handleJoyrideCallback = (data) => {
        const { status, type } = data;
        const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

        if (finishedStatuses.includes(status)) {
            setRun(false);
        }

    };
    return (
        <div className="App">
            <button className='startTourBtn' onClick={handleClickStart}>Start Tour</button>
            <Joyride
                callback={handleJoyrideCallback}
                continuous
                hideCloseButton
                run={run}
                scrollToFirstStep
                showProgress
                showSkipButton
                disableOverlay
                steps={steps}
                styles={{
                    options: {
                        zIndex: 10000,
                    },
                }}
            />
        </div>
    );
}

export default Tooltip;
