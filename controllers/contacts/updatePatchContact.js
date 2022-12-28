//? +++++++++++++++++++  mongoose +++++++++++++++++++
const { NotFound, BadRequest } = require('http-errors');
const { Contact } = require("../../models");

const { lineBreak } = require("../../services");


//-----------------------------------------------------------------------------
const updatePatchContact = async (req, res, next) => {
    const { contactId } = req.params;

    //! Проверка условия "Если body нет" 
    if (!Object.keys(req.body).length) {
        throw new BadRequest(`missing all fields`)
    }

    // const contact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });

    const { _id: user_id } = req.user //?
    //* =============================console===================================
    console.log("updatePatchContact-->req.user:".bgYellow.red); //?
    console.table(req.user); //?
    console.table([req.user]);

    console.log("updatePatchContact-->user_id:".bgYellow.blue, user_id); //?
    console.log("");
    //* =======================================================================


    //! ===========================console============================
    console.log("START-->PATCH/:id".rainbow); //!
    lineBreak();
    //! ==============================================================


    const contact = await Contact.findOneAndUpdate({ _id: contactId, userId: user_id }, req.body, { new: true });


    if (!contact) {
        //! ===========================console============================
        console.log("Нет ПОЛЬЗОВАТЕЛЯ с таким ID:".yellow, contactId.red); //!
        lineBreak();
        console.log("END-->PATCH/:id".rainbow); //!
        //! ==============================================================
        throw new NotFound(`Contact wiht id:'${contactId}' not found`)
    }

    //! ===========================console============================
    console.log(`ОБНОВЛЕННЫЙ ПОЛЬЗОВАТЕЛЬ с ID: ${contactId}:`.rainbow); //!
    console.log(contact); //!
    lineBreak();
    console.log("END-->PATCH/:id".rainbow); //!
    lineBreak();
    //! ==============================================================

    res.status(200).json({
        status: "success",
        code: 200,
        data: { contact }
    })
};

module.exports = updatePatchContact;
//? _____________________  mongoose _____________________








//todo --> OLD ------------------------------------
// const { NotFound } = require('http-errors')

// const contactsOperations = require("../../models/contacts")
// const { lineBreak } = require("../../service");


// //-----------------------------------------------------------------------------
// const updatePatchContact = async (req, res, next) => {
//     //! ===========================console============================
//     console.log("START-->PATCH/:id".rainbow); //!
//     lineBreak();
//     //! ==============================================================

//     const { contactId } = req.params;
//     const contact = await contactsOperations.updatePatchContact(contactId, req.body)

//     if (!contact) {
//         throw new NotFound(`Contact wiht id:'${contactId}' not found`)
//     }

//     res.status(200).json({
//         status: "success",
//         code: 200,
//         data: { contact }
//     })
// }

// module.exports = updatePatchContact