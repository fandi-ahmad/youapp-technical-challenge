import Image from "next/image"
import backIcon from "@/assets/icons/left-chevron.svg"

const BackButton = ({onClick}: {onClick?: () => void}) => {
  return (
    <button className="flex flex-row items-center" onClick={onClick}>
      <Image alt="left-icon" src={backIcon} loading="lazy" />
      <span className="ms-2">Back</span>
    </button>
  )
}

export default BackButton