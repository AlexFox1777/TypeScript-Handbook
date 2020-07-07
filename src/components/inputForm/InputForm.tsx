import React, { FunctionComponent, useContext, useEffect } from "react";
import { withFormik, Field, Form, FormikProps } from "formik";
import * as Yup from "yup";
import { DisplayContext } from "../contexts/DisplayContext";
import styled from "styled-components";
import Typography from "../typography/Typography";

type FormValues = {
    numbers: string;
};

const InnderForm: FunctionComponent<FormikProps<FormValues>> = ({
    isSubmitting,
    isValidating,
    values,
    status,
    errors,
    touched,
}) => {
    const context = useContext(DisplayContext);
    const MIN = 8;

    useEffect(() => {
        if (values.numbers.length > 0 && isSubmitting && !errors.numbers) {
            let nms = isSubmitting
                ? values.numbers.split(",").map((item, index) => parseInt(item))
                : [];
            console.log("nms ", nms, " smb ", isSubmitting);
            context?.setInputData(nms.length > MIN ? nms.slice(0, MIN) : nms);
        }
    }, [isSubmitting]);

    return (
        <Root>
            {/* <Typography variant="h3">Custom input</Typography> */}
            <Form className="form">
                <label className="label" htmlFor="nms">
                    Custom input{" "}
                    <Typography color="red">{errors.numbers}</Typography>
                    <Field
                        id="nms"
                        className={`field ${
                            touched.numbers && errors.numbers && " error"
                        }`}
                        name="numbers"
                        placeholder="5,2,7,6,1,3,4"
                    ></Field>
                </label>
                <button className="btn" type="submit">
                    Submit
                </button>
            </Form>
        </Root>
    );
};

const Root = styled.div`
    /* margin: 10px; */
    display: flex;
    justify-content: flex-start;
    width: 100%;

    .form {
        display: flex;
        align-items: flex-end;
        margin: 10px;
    }
    .label {
        cursor: pointer;
        display: flex;
        flex-direction: column;
    }
    .field {
        height: 30px;
        border: 1px solid #808080;
        border-radius: 4px;
    }
    .error {
        border: 1.3px solid red;
    }
    .btn {
        margin: 0 5px;
        cursor: pointer;
        height: 30px;
        background: #20bbe0;
        color: white;
        border: 1px solid #20bbe0;
        outline: none;
        border-radius: 4px;
        &:hover {
            background: #0a91b1;
        }
    }
`;

type FormProps = {
    initialNumbers?: string;
};
const InputForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: (props) => ({
        numbers: props.initialNumbers || "",
    }),
    validationSchema: Yup.object().shape({
        numbers: Yup.string().max(26).required(),
    }),
    handleSubmit(values, { resetForm, setStatus, setSubmitting }) {
        // setSubmitting(true);
        // setStatus({ success: true });
        resetForm();
    },
})(InnderForm);

export default InputForm;
