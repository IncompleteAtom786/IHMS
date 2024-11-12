import React from "react";

function Table(props) {

    function isChecked(event) {
        // console.log(event.target.checked);
        props.setChecked(event.target.checked);
    }


    return <div className="data">
        <div className="choice">
            <input type="checkbox" id="ShowAll" onChange={isChecked} />
            <label htmlFor="ShowAll">Show All Tables</label>
        </div>
        {props.display}
    </div>
}


export default Table;