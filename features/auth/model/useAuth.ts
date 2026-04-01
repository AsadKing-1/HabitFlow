"use client";

import { useState } from "react";
import type { LoginCredentials, RegisterProfileDraft } from "@/types/RegisterTypes";

function createInitialRegisterValues(): RegisterProfileDraft {
    return {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreedToTerms: false,
    };
}

function createInitialLoginValues(): LoginCredentials {
    return {
        email: "",
        password: "",
    };
}

export function useAuth(){

    const [registerValues, setRegisterValues] = useState<RegisterProfileDraft>(createInitialRegisterValues);
    const [loginValues, setLoginValues] = useState<LoginCredentials>(createInitialLoginValues);

    const updateRegisterField = <TField extends keyof RegisterProfileDraft>(
        field: TField,
        value: RegisterProfileDraft[TField],
    ) => {
        setRegisterValues((currentValues) => ({
            ...currentValues,
            [field]: value,
        }));
    };

    const updateLoginField = <TField extends keyof LoginCredentials>(
        field: TField,
        value: LoginCredentials[TField],
    ) => {
        setLoginValues((currentValues) => ({
            ...currentValues,
            [field]: value,
        }));
    };

    const resetRegisterValues = () => {
        setRegisterValues(createInitialRegisterValues());
    };

    const resetLoginValues = () => {
        setLoginValues(createInitialLoginValues());
    };

    
    
    return {
        registerValues,
        loginValues,
        setRegisterValues,
        setLoginValues,
        updateRegisterField,
        updateLoginField,
        resetRegisterValues,
        resetLoginValues,
    }
}
