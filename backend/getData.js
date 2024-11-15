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
    const edit = req.query.edit;
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
    if(edit === "true"){
        try{
            await db.query(`update bill set 
                Date = '${Date}',
                Room_Cost = ${Room_Cost},
                Test_Cost = ${Test_Cost},
                Other_Charges = ${Other_Charges},
                M_Cost = ${M_Cost},
                Total = ${Total},
                Patient_ID = ${Patient_ID}
                where Payment_ID = ${Payment_ID};`);
        }catch(e){
            console.log(e);
        }
        res.json({msg:"Successfully edited"});
        return;
    }

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

async function postPatientData(req, res){
    const {
        Patient_ID,
        Patient_Fname,
        Patient_Lname,
        Blood_type,
        Email,
        Gender,
        Condition,
        Admission_Date,
        Discharge_Date,
        Phone
    } = req.body.params.patientData;

    try {
        await db.query(`insert into patient values(
            ${Patient_ID},
            '${Patient_Fname}',
            '${Patient_Lname}',
            '${Blood_type}',
            '${Email}',
            '${Gender}',
            '${Condition}',
            '${Admission_Date}',
            '${Discharge_Date}',
            '${Phone}'
        );`);
    } catch (e) {
        console.log(e);
    }

    res.json({msg: "Success"});
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



export { getTableData, postBillData, deleteData, postPatientData };