import Joi from "joi";
import mongoose from "mongoose";

const itemSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "Pas de description"
    }
});

const Item = mongoose.model("Item", itemSchema);

const itemValidation = new Joi.object ({
    name: Joi.string()
        .required()
        .messages({
            "string.base": "Le nom doit être une chaîne de caractères.",
            "any.required": "Le nom est obligatoire."
        }),
    
    description: Joi.string()
        .optional()
        .messages({
            "string.base": "La description doit être une chaîne de caractères."
        })
});

const validateItem = (item) => {
    return itemValidation.validate(item,{ abortEarly: false });
};

export { Item, validateItem };