import React from "react";

import Goal from "./Goal";

const Goals = (props) => {
    const renderGoals = () => {
        return props.goals.map((goal) => 
            <Goal goal={goal} key={goal.id} />);
    };

    return (
        <div className="Goals">
            <ul>{renderGoals()}</ul>
        </div>
    );
    };

export default Goals;
