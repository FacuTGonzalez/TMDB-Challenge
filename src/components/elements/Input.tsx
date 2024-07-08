import React from 'react'

type InputProps = {
    placeholder: string
    onChange(e: any): void
}

export const Input = ({placeholder, onChange}: InputProps) => {
  return (
    <input
    type='text'
    placeholder={placeholder}
    className='w-full border rounded p-2 text-black'
    onChange={onChange}
  />
  )
}
