import React from "react";

export default function Goal(props) {
    return (
        <div className="goal">
            <p>Goal: {props.goal.original_goal}</p>
            <p>S: {props.goal.original_s}</p>
            <p>M: {props.goal.original_sm}</p>
            <p>A: {props.goal.original_sma}</p>
            <p>R: {props.goal.original_smar}</p>
            <p>T: {props.goal.start_date} to {props.goal.end_date}</p>
        </div>
    );
}