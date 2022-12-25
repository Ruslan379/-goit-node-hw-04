//? +++++++++++++++++++  mongoose +++++++++++++++++++
const { Contact } = require("../../models");


//-----------------------------------------------------------------------------
const removeAllContacts = async (req, res, next) => {
    const contacts = await Contact.deleteMany({});

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