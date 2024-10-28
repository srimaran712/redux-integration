import React from 'react'
import {useState} from 'react'
import { AiOutlineLeft } from "react-icons/ai";
import { MdDelete } from "react-icons/md"
import { NavLink } from 'react-router-dom';

function AdditionalDetails() {
    const[benefits,setBenefits]= useState([''])
    const[details,setDetails]=useState([{attribute:'',value:''}])
    const [category,setCategory]=useState('')


    const addBenefit=()=>{
        setBenefits([...benefits,''])
    }

    const handleAddAttribute = () =>
        setDetails([...details, { attribute: '', value: '' }]);

    const handleBenefitChange=(index,e)=>{
        const newBenefits = [...benefits];
        newBenefits[index] = e.target.value; // Update the specific benefit
        setBenefits(newBenefits);
    }
    const deleteAttribute= (ind)=>{
        const newAtrributes= details.filter((detail,index)=>index!==ind)
        setDetails(newAtrributes)
    }
    const deleteBenefit=(ind)=>{
        const newBenefits= benefits.filter((benefit,index)=>index!==ind)
        setBenefits(newBenefits)
    }

  return (
    <div className="w-full">
       <div className="mt-10 flex items-center w-full ml-1 space-x-32">
            <NavLink to='/' className=" border-none bg-gray-100 rounded-2xl py-2 px-2"><AiOutlineLeft/></NavLink>
            <h5 className="text-gray-600">Additional<br/>details</h5>
        </div>
        <hr className="mt-5 text-gray-100"></hr>

        <div className="ml-1 mt-4 w-full">
            <form className="flex flex-col items-center space-y-10 w-full mx-1 mt-4">
            <div className="flex items-center justify-between space-x-28"><h2>Benefits</h2>  <button type="button" onClick={addBenefit} className="text-blue-600 ">
        + add
      </button></div>
      {benefits.map((benefit, index) => (
        <div className="w-full flex items-center space-x-6 ml-10 " key={index}>
        <input
         
          type="text"
          placeholder={`Benefit ${index + 1}`}
          value={benefit}
          onChange={(e) => handleBenefitChange(index, e)}
          style={{ display: 'block' }}
          className="bg-gray-100 border-none  w-3/4 h-14 ml-4"
        />
        <button type="button" onClick={()=>deleteBenefit(index)}><MdDelete/></button>
        </div>
      ))}

      <div className="flex items-center justify-between space-x-28">
        <h4>Additional details</h4><button type="button" onClick={handleAddAttribute} className="text-blue-600">+ add</button></div>

        {details.map((attribute, index) => (
          <div key={index} className="flex space-x-6 mx-10">
            <input
              type="text"
              placeholder="Attribute"
              value={attribute.attribute}
              onChange={(e) => {
                const updatedAttributes = [...details];
                updatedAttributes[index].attribute = e.target.value;
                setDetails(updatedAttributes);
              }}
              className="bg-gray-100 w-1/2 h-14"
            />
            <input
              type="text"
              placeholder="Value"
              value={attribute.value}
              onChange={(e) => {
                const updatedAttributes = [...details];
                updatedAttributes[index].value = e.target.value;
                setDetails(updatedAttributes);
              }}
              className="bg-gray-100 w-1/2 h-14"
            />
            <button type="button" onClick={()=>deleteAttribute(index)}><MdDelete/></button>
           
          </div>
        ))}


            <div className="w-full mt-2 ml-10">
                <h4>Category</h4>

                <select value={category} onChange={(e)=>setCategory(e.target.value)} className="h-14 w-3/4 bg-gray-100 ml-4 mt-2 px-2">
                    <option value=''></option>
                  <option value='category1'>category1</option>
                  <option value='category2'>category2</option>
                  <option value='category3'>category3</option>
                </select>

            </div>
    

    <div className="w-full mt-16 ml-14">
        <button type="submit" className="text-white w-3/4 h-14 py-1 px-2 bg-blue-500 mt-24 ml-2"> Next</button>
    </div>
       
            </form>

        </div>
    </div>
  )
}

export default AdditionalDetails
