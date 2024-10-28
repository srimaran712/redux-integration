import React from 'react'
import {useState} from 'react'
import {useSelector} from 'react-redux'
import { AiOutlineLeft } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

function ListProducts() {

  const listItems= useSelector((state)=>{
    return state.data
  })
  console.log(listItems)
  return (
    <div className="w-full">

<div className="mt-10 flex items-center w-full ml-1 space-x-32">
            <NavLink to='/' className=" border-none bg-gray-100 rounded-2xl py-2 px-2"><AiOutlineLeft/></NavLink>
            <h5 className="text-gray-600 font-semibold"> Display products</h5>
        </div>


        <div className="w-full mt-4">
          {listItems.aboutForm.length>0?(listItems.aboutForm.map((items,ind)=>{
            return(
              <div key={ind}>
                <img src={items.photos[0]} alt={items.productName}/>
                <h3>{items.productName}</h3>
              </div>
            )
          })):<h3> no products</h3>}
        </div>
      
    </div>
  )
}

export default ListProducts
