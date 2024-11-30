
const TextBio = ({left, right}: {left: string, right?: string}) => {
  return (
    <div className="flex flex-row mt-4">
      <p className="opacity-50 me-2">{left}</p>
      <p>{right}</p>
    </div>
  )
}

export default TextBio