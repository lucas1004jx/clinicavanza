import { Control } from 'react-hook-form';

export type FormFieldType = 'input'

interface Option {
    id:string
    name:string
}

export interface CommonFormConfig<FieldName = string> {
    name:FieldName
    placeholder?:string
    fieldName:string
}
export interface InputFieldConfig<FieldName> extends CommonFormConfig<FieldName>{
    type:'input'
}

export interface TextAreaFieldConfig<FieldName> extends CommonFormConfig<FieldName>{
    type:'textArea'
}
export interface SelectFieldConfig<FieldName> extends CommonFormConfig<FieldName>{
    type:'select'
    options:Option[]
}
export type FormConfig<FieldName = string> = InputFieldConfig<FieldName> | SelectFieldConfig<FieldName> | TextAreaFieldConfig<FieldName>

export interface FormBuilderProps {
    configs:FormConfig[]
    control:Control
}
