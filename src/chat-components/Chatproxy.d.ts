/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChatproxyInputValues = {
    Field1?: string;
    Field0?: string;
};
export declare type ChatproxyValidationValues = {
    Field1?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChatproxyOverridesProps = {
    ChatproxyGrid?: PrimitiveOverrideProps<GridProps>;
    Field1?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChatproxyProps = React.PropsWithChildren<{
    overrides?: ChatproxyOverridesProps | undefined | null;
} & {
    onSubmit: (fields: ChatproxyInputValues) => void;
    onChange?: (fields: ChatproxyInputValues) => ChatproxyInputValues;
    onValidate?: ChatproxyValidationValues;
} & React.CSSProperties>;
export default function Chatproxy(props: ChatproxyProps): React.ReactElement;
