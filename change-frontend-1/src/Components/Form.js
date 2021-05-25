import React from "react";

const Form = (props) => {

    return (
        <Form className="form">
            <input
                type="text"
                id="originalGoal"
                // value={originalGoal}
                // onChange={handleChange}
            />
            <input
                type="text"
                id="originalS"
                // value={originalS}
                // onChange={handleChange}
            />
            <input
                type="text"
                id="originalSm"
                // value={originalSm}
                // onChange={handleChange}
            />
            <input
                type="text"
                id="originalSma"
                // value={originalSma}
                // onChange={handleChange}
            />
            <input
                type="text"
                id="originalSmar"
                // value={originalSmar}
                // onChange={handleChange}
            />
            <input
                type="date"
                id="startDate"
                // value={startDate}
                // onChange={handleChange}
            />
            {/* <input type="text" id="endDate" value={endDate} onChange={handleChange} /> */}
            <input
                type="text"
                id="finalGoal"
                // value={finalGoal}
                // onChange={handleChange}
            />
        </Form>
    );
};

export default Form;

