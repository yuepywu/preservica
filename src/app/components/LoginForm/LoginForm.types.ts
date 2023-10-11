import { RenderResult } from '@testing-library/react';

export type email = string
export type password = string

export interface ValidationErrors {
    email: email;
    password: password;
}

export interface FillFormAndSubmit {(
    getByLabelText: RenderResult['getByLabelText'],
    getByText: RenderResult['getByText'],
    email: email,
    password: password
): void
}