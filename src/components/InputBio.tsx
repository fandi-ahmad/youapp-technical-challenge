
interface InputBioType {
  placeholder?: string
  type?: 'text' | 'number' | 'date'
  name?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: boolean
}

const InputBio = (props: InputBioType) => {
  return (
    <input
        type={props.type ? props.type : 'text'}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        
        className={`${props.error ? 'border-red-500' : 'border-slate-500'} border rounded-lg py-2 px-4 bg-white bg-opacity-5 outline-none w-full text-white text-end`}
      />
  )
}

export default InputBio