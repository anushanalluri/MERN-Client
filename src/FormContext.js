import React, { createContext } from "react";

const FormContext = createContext();

export const FormProvider = FormContext.Provider;
export default FormContext;
