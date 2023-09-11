import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName,changeCost, addCar} from '../store'

function CarForm() {
   const {name, cost} = useSelector((state)=>{
      return {
         name : state.form.name,
         cost : state.form.cost
      }
   })
   const dispatch = useDispatch()

   const handleNameChange = (event) => {
      dispatch(changeName(event.target.value))
   }
   const handleCostChange = (event) => {
      dispatch(changeCost(event.target.value))
   }
   const handleSubmit = (event) => {
      event.preventDefault()
      dispatch(addCar({
         name : name,
         cost : parseInt(cost)
      }))
   }
   
  return (
    <div>
      <input value={name} onChange={handleNameChange}/>
      <input value={cost || ''} onChange={handleCostChange} type='number'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default CarForm