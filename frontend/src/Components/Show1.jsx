import React from "react";
import PatientForm from "./Forms/Patient";

function Show1(props) {
  const { tables } = props;
  const [selectedTableData, setSelectedTable] = React.useState([{}]);
  const [selectForm, setSelectForm] = React.useState(<></>);

  function showTable(event) {
    const tName = event.target.value.toString();
    console.log(tName);

    tables.forEach((element) => {
      if (element.tableName === tName) setSelectedTable(element.tableData);
    });

    if (tName === "") setSelectedTable([{}]);
  }

  function showAddForm(event) {
    const tName = event.target.value.toString();
    if (tName === "patient") {
      setSelectForm(<PatientForm />)
    };
    //rest of the forms can be added here as else if
    console.log(tName);
  }

  return (
    <div className="show1">
      <select onChange={showTable}>
        <option value=""> -- Please Select A Table -- </option>
        {tables.map((tItem, index) => (
          <option value={tItem.tableName} key={index}>
            {String(tItem.tableName).toUpperCase()}
          </option>
        ))}
      </select>

      <select onChange={showAddForm}>
        <option value=""> -- Please Select A Table To Insert Values -- </option>
        {tables.map((tItem, index) => (
          <option value={tItem.tableName} key={index}>
            {String(tItem.tableName).toUpperCase()}
          </option>
        ))}
      </select>

      {
        selectForm
      }

      {
        <table>
          <thead>
            <tr>
              {Object.keys(selectedTableData[0]).map((c) => (
                <th>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {selectedTableData.map((rh) => (
              <tr>
                {Object.values(rh).map((rd) => (
                  <td>{rd}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
}

export default Show1;
