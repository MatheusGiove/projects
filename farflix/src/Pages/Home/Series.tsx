import React from 'react'
import { useData } from '../../Hooks/useData'

export const Series = () => {
  const data = useData()
  console.log(data)

  return (
    <div>Series</div>
  )
}
