//? +++++++++++++++++++  mongoose +++++++++++++++++++
const { Contact } = require("../../models");

const { lineBreak } = require("../../services");


//-----------------------------------------------------------------------------
const removeAllContacts = async (req, res, next) => {
    // const contacts = await Contact.deleteMany({});

    const { _id: user_id } = req.user //?
    //* =============================console===================================
    console.log("removeAllContacts-->req.user:".bgYellow.red); //?
    console.table(req.user); //?
    console.table([req.user]);

    console.log("removeAllContacts-->user_id:".bgYellow.blue, user_id); //?
    console.log("");
    //* =======================================================================


    const contacts = await Contact.deleteMany({ userId: user_id });

    //! ===========================console============================
    console.log("START-->DELETE/All".bgRed.yellow); //!
    lineBreak();
    console.log("ВСЕ ВАШИ ПОЛЬЗОВАТЕЛИ УДАЛЕНЫ...".bgRed.white); //!
    lineBreak();
    console.log("END-->DELETE/All".bgRed.yellow); //!
    lineBreak();
    //! ==============================================================


    res.status(200).json({
        status: "success",
        code: 204,
        message: "ALL Users were remove...",
        data: { contacts }
    });
};

module.exports = removeAllContacts;
//? _____________________  mongoose _____________________




//todo --> OLD ------------------------------------
// const contactsOperations = require("../../models/contacts")


// //-----------------------------------------------------------------------------
// const removeAllContacts = async (req, res, next) => {
//     const contacts = await contactsOperations.removeAllContacts()

//     res.status(200).json({
//         status: "success",
//         code: 204,
//         message: "ALL Users were remove...",
//         data: { contacts }
//     });
// }

// module.exports = removeAllContacts