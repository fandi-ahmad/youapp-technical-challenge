import BackButton from './BackButton'

interface HeaderProfileType {
  username: string
  onClick?: () => void
}

const HeaderProfile = (props: HeaderProfileType) => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-full">
        <BackButton onClick={props.onClick}/>
      </div>
      <div className="w-full text-center">
        <p>{props.username}</p>
      </div>

      <div className="w-full">
        <span></span>
      </div>
    </div>
  )
}

export default HeaderProfile