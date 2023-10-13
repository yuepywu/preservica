export type Temail = string
export type Tpassword = string

export interface ILoginValidationErrors {
    email: Temail
    password: Tpassword
}

export interface ILoginFormProps {
    onClickContinue: () => void | undefined
}