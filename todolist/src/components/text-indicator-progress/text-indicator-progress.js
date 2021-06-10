import React from 'react-dom';

const TextIndicatorProgress = ({willdo:wd, did:dd}) => {
    return(
        <div>
            <span> {wd} more to do, </span>
            <span> {dd} done</span>
        </div>
    );
}

export default TextIndicatorProgress;