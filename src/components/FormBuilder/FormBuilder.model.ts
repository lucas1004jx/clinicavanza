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
    required?:boolean
}
export interface InputFieldConfig<FieldName = string> extends CommonFormConfig<FieldName>{
    type:'input'
}

export interface TextAreaFieldConfig<FieldName = string> extends CommonFormConfig<FieldName>{
    type:'textArea'
    rows?:number
}
export interface SelectFieldConfig<FieldName = string> extends CommonFormConfig<FieldName>{
    type:'select'
    options:Option[]
}
export type FormConfig<FieldName = string> = InputFieldConfig<FieldName> | SelectFieldConfig<FieldName> | TextAreaFieldConfig<FieldName>

export interface FormBuilderProps {
    configs:FormConfig[]
    control:Control
}

export interface FieldNameProps {
    name:string
    required?:boolean
}

export interface StyleProps {
 required?:boolean
}
