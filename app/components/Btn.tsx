"use client"

import { useFormStatus } from "react-dom"

export   function SubmitBtn() {
  const {pending}= useFormStatus();
  return (
    <button type='submit' className=' bg-green-800 rounded-lg mt-2 text-white py-2 '>
    {pending ? "Submiting....":"Submit"} 
  </button>
  )
}


export  function SaveBtn() {
  const {pending}= useFormStatus();
  return (
  <button className="border bg-green-400">{pending ? "Saving....":"Save"}</button>
  )
}

export  function UpdateBtn() {
  const {pending}= useFormStatus();
  return (
  <button className="border bg-green-400">{pending ? "Updating....":"Update"}</button>
  )
}

export  function DeleteBtn() {
  const {pending}= useFormStatus();
  return (
  <button className="border bg-red-400">{pending ? "Deleting....":"Delete"}</button>
  )
}

