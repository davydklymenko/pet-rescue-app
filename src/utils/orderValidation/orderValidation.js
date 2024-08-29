import * as Yup from "yup";

export const orderValidation = Yup.object({
    firstname: Yup.string().min(3).required("First name is missing"),
    lastname: Yup.string().min(3).required("Last name is missing"),
    email: Yup.string().email("Please, enter valid email").required("Email is missing"),
    phone: Yup.number().min(7).required("Phone number is missing"),
    address: Yup.string().min(10).required("Address is missing"),
    birth: Yup.date().required("Birthdate is missing"),
    nickname: Yup.string().min(2).max(15).required("Real cutie name is missing"),
    agreement: Yup.boolean().oneOf([true], "You must agree with our Terms and Conditions").required(),
})