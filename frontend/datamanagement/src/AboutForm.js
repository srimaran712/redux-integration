import React from 'react'
import {useState} from 'react'
import { AiOutlineLeft } from "react-icons/ai";
import { useDispatch,useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { aboutform } from './redux';
import { NavLink } from 'react-router-dom';

function AboutForm({handleNextOne}) {
    const[productName,setProductName]=useState('')
    const[description,setDescription]=useState('')
    const[formDetails,setFormDetails]=useState(null)
    const[photos,setPhotos]=useState([])
    const[price,setPrice]=useState(0.00)
    const dispatch= useDispatch()
    const navigate=useNavigate()
    const listItems= useSelector((state)=>{
        return state.data
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        const data={productName,description,photos,price}
        dispatch(aboutform(data))
        navigate('/additional')
        console.log(listItems)

    }
    
  return (
    <div className='w-full'>
        <div className="mt-10 flex items-center w-full ml-5 space-x-32">
            <NavLink to='/products' className=" border-none bg-gray-100 rounded-2xl py-2 px-2"><AiOutlineLeft/></NavLink>
            <h5 className="text-gray-600">About</h5>
        </div>
        <hr className="mt-5 text-gray-100"></hr>
        <div className="ml-4 mt-4 w-full">
            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-10 w-full mx-8 mt-4">
               <div className="w-full mx-4">
               
                <input type="text" value={productName} onChange={(e)=>setProductName(e.target.value)} placeholder="Name" className="bg-gray-200 border-none py-1 px-2 w-3/4 h-14"/></div>
               <div className="w-full mx-4">
               <textarea value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description" className="bg-gray-200 py-1 px-2 w-3/4 h-32">

                   </textarea>
                </div>


                <div className="w-full mx-4">
                  <div className="flex items-center space-x-16">  <h4>Cover<br/>Photos</h4>  <h4 className="text-gray-500">(upload upto 3 photos)</h4></div> 

                  <input type="file" multiple accept="image/*"  onChange={(e)=>{
                    const files = Array.from(e.target.files);
                    const photoUrls = files.map(file => URL.createObjectURL(file));
                    setPhotos(photoUrls);
                     
                  }} className="mt-5 h-14"/>

                    </div> 
                    <div className="w-full mx-2">
                        <h4>Price</h4>
                        <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="$0.00" className="bg-gray-200 border-none py-1 px-2 w-3/4 h-14 mt-2"/>
                    </div>
                    <div className="w-full mt-16">
                        <button type="submit" className="text-white w-3/4 h-14 py-1 px-2 bg-blue-500 mt-24">Next</button>
                    </div>
                
            </form>
        </div>
      
    </div>
  )
}

export default AboutForm
