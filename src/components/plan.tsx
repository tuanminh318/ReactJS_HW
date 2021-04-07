import React from 'react'
import '../css/plan.css';

interface PlanProps
{
    icon?: string,
    header?: string,
    text?: string,
    number?: number,
    list:Service[],
    primarycolor?: string,
}
interface Service 
{
    service?:string,
    isActive?:boolean,
}

export const Plan = ({...props}: PlanProps) => {
    return(
        <div className="col span-1-of-3">
            
        <div className = "icon">
            <i className={props.icon}></i>
            <h3>{props.header}</h3>
        </div>
        <div>
            <h3>${props.number}</h3>
            <p>{props.text}</p>
        </div>
        <div className="text">
            {
                props.list.map(p=><div>
                    {p.isActive}
                    {p.service}
                </div>)
            }
        </div>
        <div>
            <button className="btn btn-primary">Buy Now</button>
        </div>
        
    </div>
    )
};

export default Plan;
