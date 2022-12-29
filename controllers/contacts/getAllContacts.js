//? +++++++++++++++++++  mongoose +++++++++++++++++++
const { Contact } = require("../../models");
// const { Contact } = require("../../models/contact.js");
// console.log("Contact:", Contact); //!

const { lineBreak } = require("../../services");


//-----------------------------------------------------------------------------
const getAllContacts = async (req, res, next) => {
    // const contacts = await Contact.find({});

    const { _id: user_id } = req.user //?
    //* =============================console===================================
    console.log("getAllContacts-->req.user:".bgYellow.red); //?
    console.table(req.user); //?
    console.table([req.user]);

    console.log("getAllContacts-->user_id:".bgYellow.blue, user_id); //?
    console.log("");
    //* =======================================================================

    //? =============================Пагинация=================================
    let {
        skip = 1,
        limit = 2
    } = req.query;

    // skip = parseInt(skip); //! работает и без этого
    // limit = parseInt(limit); //! работает и без этого
    // limit = limit > 2 ? 2 : limit //! будет показано только: 2 контакта (поста)
    //? =======================================================================

    //? ===========================Aggregation=================================




    //? =======================================================================


    // const contacts = await Contact.find({ userId: user_id }); //*
    //?
    const contacts = await Contact.find({ userId: user_id, skip, limit })
        .select({ createdAt: 0 })   //! не показывать поле "createdAt"
        .skip(skip)   //! с какого элемента массива (объекта) начать показ
        .limit(limit)   //! сколько элементов массива (объекта) показать
        .sort("name") //! сортировка по полю "name"
    // .sort({ "favorite": true }) //! сортировка по полю "name"


    //! ===========================console============================
    console.log("START-->GET/All".green); //!
    lineBreak();
    console.log("СПИСОК ВСЕХ ПОЛЬЗОВАТЕЛЕЙ:".bgGreen.black)
    // console.table(contacts);
    console.log(contacts); //!!!!!
    lineBreak();
    console.log("END-->GET/All".green); //!
    lineBreak();
    //! ==============================================================


    res.status(200).json({
        status: "success",
        code: 200,
        data: { contacts },
        skip,
        limit
    });
};

module.exports = getAllContacts;
//? _____________________  mongoose _____________________




//todo --> OLD ------------------------------------
// const contactsOperations = require("../../models/contacts")


// //-----------------------------------------------------------------------------
// const getAllContacts = async (req, res, next) => {
//     const contacts = await contactsOperations.listContacts()

//     res.status(200).json({
//         status: "success",
//         code: 200,
//         data: { contacts }
//     })
// }

// module.exports = getAllContacts