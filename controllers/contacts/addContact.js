//? +++++++++++++++++++  mongoose +++++++++++++++++++
const { Contact } = require("../../models");


//-----------------------------------------------------------------------------
const addContact = async (req, res, next) => {
    const contact = await Contact.create(req.body);

    res.status(201).json({
        status: "success",
        code: 201,
        data: { contact }
    });
};

module.exports = addContact;
//? _____________________  mongoose _____________________








//todo --> OLD ------------------------------------
// const contactsOperations = require("../../models/contacts")
// const { lineBreak } = require("../../service");


// //-----------------------------------------------------------------------------
// const addContact = async (req, res, next) => {
//     //! ===========================console============================
//     console.log("START-->POST".yellow); //!
//     lineBreak();
//     //! ==============================================================

//     const contact = await contactsOperations.addContact(req.body)

//     res.status(201).json({
//         status: "success",
//         code: 201,
//         data: { contact }
//     });
// }

// module.exports = addContact