import React from 'react'
import {useDispatch} from "react-redux"
import {actionCreator} from "../State/allaction"
import {bindActionCreators} from "redux"
function Shop() {

const dispatch=useDispatch()
const {withdraw,deposit}=bindActionCreators(actionCreator,dispatch)
  return (
    <>

    <h2 className="text-center font-bold text-lg mt-10">DEPOSIT AND WITHDRAW</h2>
    <div className="flex justify-center mt-8">
      <button className="bg-blue-600 p-4 mr-4" onClick={()=>{withdraw(100)}} >-</button>
      <p className="mt-4">UPDATE BALANCE</p>
      <button className="bg-blue-600 p-4 ml-4" onClick={()=>{deposit(100)}}>+</button>
    </div>
    </>
  )
}

export default Shop
