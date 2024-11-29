interface LoadingType {
  className?: string
}

const Loading = (props: LoadingType) => {
  return (
    <div className={`flex items-center justify-center ${props.className}`}>
      <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default Loading