function Show2(props) {
    const tables = props.tables;
    return <div>
        {tables.map((t, index) => (
            <table className="table">
                <caption>{`${index + 1}. ${String(t.tableName).toUpperCase()}`}</caption>
                <thead>
                    <tr>
                        {Object.keys(t.tableData[0]).map((c) => <th>{c}</th> )}
                    </tr>
                </thead>
                <tbody>
                    {t.tableData.map((rh) => 
                    <tr>
                        {Object.values(rh).map((rd) => <td>{rd}</td>)}
                    </tr>
                    )}
                </tbody>
            </table>
        ))}
    </div>
}

export default Show2;