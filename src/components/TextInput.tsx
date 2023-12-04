import { FC } from "react";

interface Props {
    value: string
    placeholder: string
    field: string
    onChange: Function
}
export const TextInput: FC<Props> = (props) => {
    return (
        <div>
            <input
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange(props.field)}
                id={props.field}
                type={'text'}
            />
        </div>
    )
}