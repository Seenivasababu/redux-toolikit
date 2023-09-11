   import React from 'react'
   import {  useSelector } from 'react-redux'

   function CarTotal() {
      const totalCost = useSelector(({cars : {data,searchTerm}})=> {
         return data
         .filter((car)=>car.name.toLowerCase().includes(searchTerm.toLowerCase()))
         .reduce((acc,car)=>{
            return acc+car.cost
         },0)
      })

   return (
      <div>CarTotal - ${totalCost}</div>
   )
   }

   export default CarTotal