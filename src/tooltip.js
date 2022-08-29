import React, { useState } from 'react';
import { useEffect } from 'react';
import Joyride, { STATUS } from "react-joyride";

const Tooltip = ({ steps, backgroundColor, startTooltip }) => {
    const [run, setTooltip] = useState(false);

    const handleJoyrideCallback = (data) => {
        const { status, type } = data;
        const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

        if (finishedStatuses.includes(status)) {
            setTooltip(false);
        }

    };

    useEffect(() => {
        console.log(startTooltip);
        setTooltip(startTooltip)
    }, [startTooltip])
    return (
        <div className="App">
            <Joyride
                callback={handleJoyrideCallback}
                continuous
                hideCloseButton
                run={run}
                showProgress
                showSkipButton
                disableOverlay
                steps={steps}
                styles={{
                    buttonNext: {
                        backgroundColor: backgroundColor
                    },
                    options: {
                        zIndex: 10000,
                    },
                }}
            />
        </div>
    );
}

export default Tooltip;
