import db from "./database.js"

async function getTableNameFromDB()
{
    var tableNames = await db.query("SELECT tablename FROM pg_catalog.pg_tables where schemaname='public'");
    tableNames = tableNames.rows;
    tableNames = tableNames.map((t) => {
        return Object.values(t).map((i) => {
            return i;
        })
    });

    return tableNames;
}

async function giveDataAndTablesToFrontend(req, res) {

    var tableToSend = await getTableNameFromDB();
    var dataToSend = [];
    for (let i = 0; i < tableToSend.length; i++) {
        dataToSend.push((await db.query(`select * from ${tableToSend[i]}`)).rows);
    }

    // console.log(dataToSend[0][0]);
    res.json({tableName: tableToSend, tableData: dataToSend});
}

async function executeModifyingQuery(req, res)
{
    const query = req.body.sentQuery;
    // console.log(query);

    try
    {
        await db.query(`${query}`)
    }
    catch(err)
    {
        console.log(err);
        // res.json({error: err})
    }
}

async function executeSelectQuery(req, res)
{
    const query = req.body.sentQuery;
    // console.log(query);

    try{
        const dataToSend = await db.query(`${query}`);
        // console.log(dataToSend.rows)
        res.json(dataToSend.rows);
    }
    catch(e)
    {
        console.log(e);
    }
}


export {giveDataAndTablesToFrontend, executeModifyingQuery, executeSelectQuery};