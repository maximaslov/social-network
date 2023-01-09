import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
    email: Yup.string()
        .max(50, "Must be less than 50 characters")
        .email("Invalid e-mail adres")
        .required("The e-mail field must not be empty"),
    password: Yup.string()
        .min(8, "")
        .required("")
});
export default loginFormSchema;