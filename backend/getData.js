import db from "./database.js"

const p_key = {
    bill: "Payment_ID",
    patient: "Patient_ID",
    room: "Room_ID",
    medicine: "Medicine_ID",
    appointment: "Appointment_ID",
    prescription: "Prescription_ID",
    staff: "Emp_ID"
}

async function getTableData(req, res) {
    const tableName = req.query.tableName;
    var tableDataToSend = [];
    const tableDataDB = (await db.query(`select * from ${tableName};`)).rows;

    tableDataDB.forEach(element => {
        tableDataToSend.push(Object.values(element).map(value => value.toString()));
    });
    // console.log(tableDataToSend);

    res.json({tableData: tableDataToSend});
    // res.json({msg: "Hello from getData.js!"});
}

async function postBillData(req, res) {
    const {
        Payment_ID,
        Date,
        Room_Cost,
        Test_Cost,
        Other_Charges,
        M_Cost,
        Total,
        Patient_ID
     } = req.body.params.billData;

    try{
        await db.query(`insert into bill values(
            ${Payment_ID},
            '${Date}',
            ${Room_Cost},
            ${Test_Cost},
            ${Other_Charges},
            ${M_Cost},
            ${Total},
            ${Patient_ID}
        );`)
    }catch(e){
        console.log(e);
    }

    res.json({msg:"Success"});
}
async function deleteData(req, res) {
    const tableName = req.query.tableName;
    const primaryKey = req.query.primaryKey;

    try{
        await db.query(`delete from ${tableName} where ${p_key[tableName]} = ${primaryKey};`);
    }catch(e){
        console.log(e);
    }

    res.json({msg:"Successfully deleted"});
}



export { getTableData , postBillData, deleteData};