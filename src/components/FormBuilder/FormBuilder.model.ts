import { Control } from 'react-hook-form';

export type FormFieldType = 'input'

interface Option {
    id:string
    name:string
}

export interface CommonFormConfig {
    name:string
    placeholder?:string
    fieldName:string
}
export interface InputFieldConfig extends CommonFormConfig{
    type:'input'
}

export interface TextAreaFieldConfig extends CommonFormConfig{
    type:'textArea'
}
export interface SelectFieldConfig extends CommonFormConfig{
    type:'select'
    options:Option[]
}
export type FormConfig = InputFieldConfig | SelectFieldConfig | TextAreaFieldConfig

export interface FormBuilderProps {
    configs:FormConfig[]
    control:Control
}
