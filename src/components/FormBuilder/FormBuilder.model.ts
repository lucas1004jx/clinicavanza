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
export interface SelectFieldConfig extends CommonFormConfig{
    type:'select'
    options:Option[]
}
export type FormConfig = InputFieldConfig | SelectFieldConfig

export interface FormBuilderProps {
    configs:FormConfig[]
    onSubmit:(data:any)=>void
}
