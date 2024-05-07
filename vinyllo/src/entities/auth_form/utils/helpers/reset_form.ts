import { TFormSetData } from "../hooks/use_form";

export type TResetForm = (arg0: TFormSetData, arg1: TFormSetData) => void;
export const resetForm: TResetForm = (setValuesCallback, setErrorsCallback) => {
    setValuesCallback({});
    setErrorsCallback({});
};