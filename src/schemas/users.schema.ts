import joi from "joi";

export const userSchema = joi.object({
    name: joi.string().alphanum().max(20).min(2).required(),
    email: joi.string().email().required(),
    passoword: joi.string().min(6).required(),
    confirmPassword: joi.string().required(),
});

