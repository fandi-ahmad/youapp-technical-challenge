import Image from 'next/image'
import editIcon from '@/assets/icons/edit.svg'
import React from 'react'

interface CardProfileType {
  title: string
  children: React.ReactNode
  handleEditClick?: () => void
}

const CardProfile = (props: CardProfileType) => {
  return (
    <div className="w-full bg-dark-soft-blue rounded-xl mt-8 flex flex-col p-4">
      <div className="flex justify-between items-center">
        <p className="font-semibold">{props.title}</p>
        <button onClick={props.handleEditClick}>
          <Image alt="edit" src={editIcon} />
        </button>
      </div>
      {props.children}
    </div>
  )
}

export default CardProfile