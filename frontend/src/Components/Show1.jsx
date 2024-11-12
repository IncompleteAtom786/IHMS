import React from "react";

function Show1(props) {
  const { tables } = props;
  const [selectedTableData, setSelectedTable] = React.useState([{}]);

  function showTable(event) {
    const tName = event.target.value.toString();
    // console.log(tName);

    tables.forEach((element) => {
      if (element.tableName === tName) setSelectedTable(element.tableData);
    });

    if (tName === "") setSelectedTable([{}]);
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
