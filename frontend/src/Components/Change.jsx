import React from "react";

function Change(props) {
    const [query, setQuery] = React.useState("");

    function handleChange(event) {
        setQuery(event.target.value);
    }

    async function sendQuery() {
        await fetch(props.baseURL + "/modify", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                sentQuery: query
            })
        })
    }


    return <div className="change">
        <h2>Here, you can write the queries for modifying the above tables by <em>'INSERT'</em>, <em>'DELETE'</em>, <em>'ALTER'</em> and <em>'UPDATE'</em> commands of SQL.</h2>
        <textarea onChange={handleChange} id="change" placeholder="Enter your Query to INSERT, DELETE, ALTER or UPDATE the above Tables......." />
        <button onClick={sendQuery}>Execute</button>
    </div>
}

export default Change;