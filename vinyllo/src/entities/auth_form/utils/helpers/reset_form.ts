import { TFormSetData } from "../hooks/use_form";

export type TResetForm = (arg0: TFormSetData, arg1: TFormSetData) => void;
const resetForm: TResetForm = (setValuesCallback, setErrorsCallback) => {
    setValuesCallback({});
    setErrorsCallback({});
};

export default resetForm;