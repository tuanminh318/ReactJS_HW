import React from 'react';
import '../css/bar.css';

interface BarProps 
{
    icon?: any,
    number?: string,
    text?: string
}

export const Bar = ({...props}: BarProps) => {
    return <div className="row col-md-3">
        <div className="Bar-icon col-md-4 align-self-center">
            <span className="float-right"><i className={`fa fa-${props.icon}`}/></span>
        </div>
        <div className="Bar-number col-md-8">
            <p className="my-0">{props.number}</p>
            <p>{props.text}</p>
        </div>
    </div>
};

export default Bar;