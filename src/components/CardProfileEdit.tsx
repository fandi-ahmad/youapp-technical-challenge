import React from 'react'

interface CardProfileEditType {
  title: string
  children: React.ReactNode
  handleButtonClick?: () => void
}

const CardProfileEdit = (props: CardProfileEditType) => {
  return (
    <div className="w-full bg-dark-soft-blue rounded-xl mt-8 flex flex-col p-4">
      <div className="flex justify-between items-center">
        <p className="font-semibold">{props.title}</p>
        <button onClick={props.handleButtonClick}>
          <p className='text-golden'>Save & Update</p>
        </button>
      </div>
      {props.children}
    </div>
  )
}

export default CardProfileEdit