import React from 'react'

const Label = ({children, bgDark}: {children: React.ReactNode, bgDark?: boolean}) => {
  return (
    <p className={`capitalize py-2 px-4 rounded-full w-fit flex flex-row ${bgDark ? 'bg-slate-700' : 'bg-white bg-opacity-10'}`}>
      {children}
    </p>
  )
}

export default Label