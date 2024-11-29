
interface BaseInputType {
  placeholder?: string
  type?: string
  name?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: boolean
}

const BaseInput = (props: BaseInputType) => {
  return (
    <>
      <input
        type={props.type ? props.type : 'text'}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className={`${props.error && 'border border-red-500'} rounded-lg p-4 bg-white bg-opacity-20 outline-none w-full mb-4 text-white`}
      />
    </>
  )
}

export default BaseInput