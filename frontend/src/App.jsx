import React, { useEffect } from "react";
import Table from "./Components/Table";
import Change from "./Components/Change";
import Select from "./Components/Select";
import Show2 from "./Components/Show2";
import Show1 from "./Components/Show1";

function App() {
	const baseURL = "http://localhost:8383";
    const [table, setTable] = React.useState([{}]);
    const [display, setDisplay] = React.useState();
    const [checked, setChecked] = React.useState(false);

	useEffect( () => {
		async function getTable() {
            try {
                const tableDataFromServer = await fetch(baseURL + "/", {
                    method: "GET"
                });
                const data = await tableDataFromServer.json();
                setTable(data.tableDataToSend || [{}])

                setDisplay(checked ?
                    <Show2
                        tables={table}
                    /> :
                    <Show1
                        tables={table}
                    />)
            }
            catch (err) {
                console.error("Try to run the Server!!")
            }
        }
        getTable();
	}, [table, checked])
	
	return <div className="tableContainer">
	 	<Table 
		baseURL={baseURL}
		display = {display}
		setChecked={setChecked}
		/>
		<Change 
		baseURL = {baseURL}
		/>
		<Select 
		baseURL = {baseURL}
		/>
	</div>
}

export default App;