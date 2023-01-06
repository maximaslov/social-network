import * as Yup from "yup";

const sendMessageValidationSchema = Yup.object().shape({
    newMessageBody: Yup.string()
        .max(500, "Must be less than 500 characters")
        .required("The field must not be empty"),
});

export default sendMessageValidationSchema;