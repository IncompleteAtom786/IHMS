import db from "./database.js"

async function getTableNameFromDB() {
    var tableNames = await db.query("SELECT tablename FROM pg_catalog.pg_tables where schemaname='public'");
    // console.log(tableNames);
    tableNames = tableNames.rows;
    tableNames = tableNames.map((t) => {
        return Object.values(t).map((i) => {
            return i;
        })
    });

    return tableNames;
}

async function giveDataAndTablesToFrontend(req, res) {

    var tableNames = await getTableNameFromDB();

    var tableDataToSend = [];
    for (let i = 0; i < tableNames.length; i++) 
    {
        const tableDataDB = (await db.query(`select * from ${tableNames[i]};`)).rows;
        tableDataToSend.push({
            tableName: tableNames[i].toString(),
            tableData: tableDataDB
        });
        // console.log(tableDataDB);
    }

    res.json({tableDataToSend: tableDataToSend});
}

async function executeModifyingQuery(req, res) {
    const query = req.body.sentQuery;
    // console.log(query);

    try {
        await db.query(`${query}`)
    }
    catch (err) {
        console.error(err);
        // res.json({error: err})
    }
}

async function executeSelectQuery(req, res) {
    const query = req.body.sentQuery;
    // console.log(query);

    try {
        const dataToSend = await db.query(`${query}`);
        // console.log(dataToSend.rows)
        res.json(dataToSend.rows);
    }
    catch (e) {
        console.error(e);
    }
}


export { giveDataAndTablesToFrontend, executeModifyingQuery, executeSelectQuery };