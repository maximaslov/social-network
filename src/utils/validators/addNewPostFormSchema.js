import * as Yup from "yup";

const addNewPostFormSchema = Yup.object().shape({
    newPostBody: Yup.string()
        .required("The field must not be empty")
        .min(15, "Must be longer than 15 characters")
        .max(500, "Must be less than 500 characters"),
});

export default addNewPostFormSchema;