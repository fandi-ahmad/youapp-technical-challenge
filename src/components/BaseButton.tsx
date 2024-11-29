import React from "react"

interface BaseButtonType {
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}

const BaseButton = (props: BaseButtonType) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className="p-3 w-full text-center bg-gradient-to-r from-shine-blue-100 to-shine-blue-200 disabled:opacity-50 shadow-shine-blue-100 shadow-soft-blue rounded-lg flex flex-row items-center justify-center"
    >
      {props.children}
    </button>
  )
}

export default BaseButton