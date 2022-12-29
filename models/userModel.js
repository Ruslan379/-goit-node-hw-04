//? +++++++++++++++++++  mongoose +++++++++++++++++++
const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSchemaValidationErrors } = require("../helpers");

const bcrypt = require("bcrypt");

//-----------------------------------------------------------------------------


const userSchema = Schema({
    email: {
        type: String,
        required: [true, 'Set username'],
        unique: true
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    title: {
        type: String,
    },
    bio: {
        type: String,
    },
    password: {
        type: String,
        required: [true, 'Set password'],
        // unique: true,
    },
}, { versionKey: false, timestamps: true });

//!  await bcrypt.hash(password, 10)
userSchema.pre("save", async function () {
    if (this.isNew) {
        this.password = await bcrypt.hash(this.password, 10)
    };
    // TODO: if user changed his password
});


//! Правильный код ошибки contactSchema
userSchema.post("save", handleSchemaValidationErrors)

//* ++++++++++++++++++++++ Схемы ВАЛИДАЦИИ Joi +++++++++++++++++++++++++
const contactJoiSchemaPostPut = Joi.object({
    name: Joi.string()
        // .alphanum()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua', 'org',] } })
        .required(),

    phone: Joi.string()
        // .alphanum()
        .min(5)
        .max(14)
        .required(),

    favorite: Joi.bool()
        .optional(),
});

//--------------------------------------------------------------------
const contactJoiSchemaPatch = Joi.object({
    name: Joi.string()
        // .alphanum()
        .min(3)
        .max(30)
        .optional(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua', 'org',] } })
        .optional(),

    phone: Joi.string()
        // .alphanum()
        .min(5)
        .max(14)
        .optional(),

    favorite: Joi.bool()
        .optional(),
});

//--------------------------------------------------------------------
const contactJoiSchemaPatchFavorite = Joi.object({
    favorite: Joi.bool()
        .required(),
});
//* _______________________ Схемы ВАЛИДАЦИИ Joi _______________________


//? Создаем МОДЕЛЬ:
const User = model("user", userSchema); //! DB_HOST
// const Contact = model("product", contactSchema); //! DB_HOST1


module.exports = {
    User,
    // contactJoiSchemaPostPut,
    // contactJoiSchemaPatch,
    // contactJoiSchemaPatchFavorite
};

//? _____________________  mongoose _____________________