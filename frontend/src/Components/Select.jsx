import React from "react";

function Select(props) {
    const [tableData, setTableData] = React.useState([{}]);
    const [query, setQuery] = React.useState("")

    async function getQueryResult() {
        await fetch(props.baseURL + "/select", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                sentQuery: query
            })
        }).then((response) => (response.json()).then((data) => { setTableData(data) }));

    }

    return <div>
        <div className="select">
            <h2>Here, you can write the <em>'SELECT'</em> queries for displaying the tables and for joining the tables, i.e. solving real-time Queries using SQL Database.</h2>
            <textarea id="select" placeholder="Enter Your Query Here......." onChange={(e) => { setQuery(e.target.value); }} />
            <button onClick={getQueryResult}>Execute</button>
        </div>

        <div className="output">
            <table>
                <thead>
                    <tr>
                        {Object.keys(tableData[0]).map((c) => <th>{c}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((rh) =>
                        <tr>
                            {Object.values(rh).map((rd) => <td>{rd}</td>)}
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    </div>
}

export default Select;