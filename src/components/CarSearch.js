import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSearchTerm } from '../store'

function CarSearch() {
   const searchTerm = useSelector((state)=> state.cars.searchTerm)
   const dispatch = useDispatch()
   
   const handleSearchTermChange = (event)=>{
      dispatch(changeSearchTerm(event.target.value))
   }
  return (
    <div>
      Search
      <input value={searchTerm} onChange={handleSearchTermChange}/>
    </div>
  )
}

export default CarSearch