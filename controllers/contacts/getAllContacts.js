//? +++++++++++++++++++  mongoose +++++++++++++++++++
const { Contact } = require("../../models");
// const { Contact } = require("../../models/contact.js");
// console.log("Contact:", Contact); //!

const { lineBreak } = require("../../service");


//-----------------------------------------------------------------------------
const getAllContacts = async (req, res, next) => {
    const contacts = await Contact.find({});

    //! ===========================console============================
    console.log("START-->GET/All".green); //!
    lineBreak();
    console.log("СПИСОК ВСЕХ ПОЛЬЗОВАТЕЛЕЙ:".bgGreen.black)
    // console.table(contacts);
    console.log(contacts);
    lineBreak();
    console.log("END-->GET/All".green); //!
    lineBreak();
    //! ==============================================================

    res.status(200).json({
        status: "success",
        code: 200,
        data: { contacts }
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