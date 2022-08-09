export type FormFieldType = 'input'

export interface FormConfig {
    type:string
    name:string
}

export interface FormBuilderProps {
    configs:FormConfig[]
    onSubmit:(data:any)=>void
}
