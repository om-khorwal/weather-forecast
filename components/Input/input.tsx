'use client'

interface InputProps {
    classname: string;
    type: string;
    placeholder: string;
    required: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

function Input({type, placeholder, classname, required, value, onChange}:InputProps) {
    return (

        <div className={classname}>
            <input className={classname} required={required} value={value} type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    )

}

export default Input;