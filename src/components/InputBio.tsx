
interface InputBioType {
  placeholder?: string
  type?: 'text' | 'number' | 'date'
  name?: string
  value?: any
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: boolean
  disabled?: boolean
}

const InputBio = (props: InputBioType) => {
  return (
    <input
        type={props.type ? props.type : 'text'}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        className={`${props.error ? 'border-red-500' : 'border-slate-500'} border rounded-lg py-2 px-4 bg-white bg-opacity-5 outline-none w-36 sm:w-52 text-white text-end`}
      />
  )
}

export default InputBio