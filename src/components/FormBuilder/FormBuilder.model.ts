export type FormFieldType = 'input'

export interface CommonFormConfig {
    type:string
    name:string
    label:string
}
export interface InputFieldConfig extends CommonFormConfig{

}
export type FormConfig = InputFieldConfig

export interface FormBuilderProps {
    configs:FormConfig[]
    onSubmit:(data:any)=>void
}
