import React, { Dispatch, SetStateAction, useState } from 'react'
type Props = {
  textOfChildToParent: (text: string) => void
  closeModalEdit: () => void
}
const ModalEdit = ({textOfChildToParent, closeModalEdit}: Props) => {
  const [value, setValue] = useState('')

 const handleClickTextChildForParent = () => {
  if(value.trim() === "") return false
  textOfChildToParent(value)
  closeModalEdit()
  
 }
 const handleKeyUp = (e: KeyboardEvent) => {
  if(e.code === 'Enter'){
    if(value.trim() === "") return false
    textOfChildToParent(value)
    closeModalEdit()
  }
 }
  return (
    <div  className='bg-black/80 cursor-pointer fixed w-full h-screen top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center'>
       <p onClick={closeModalEdit} 
       className='w-full flex-1 px-5 py-4 text-white text-2xl text-right bottom-0'>X</p>

       <div  className='max-w-2xl absolute px-3  py-1 cursor-pointer bg-white rounded-md'>
         <h1 className='text-2xl w-full border-b text-black border-gray-400 py-3'>Editar.</h1>
         <div className='w-full flex flex-col gap-3 py-3'>
          <input 
           value={value}
           onKeyUp = {handleKeyUp}
           onChange={e => setValue(e.target.value)}
          className ="w-full border text-black border-gray-400 px-2 py-2 bg-transparent outline-none rounded-md" 
          type="text"  placeholder='Informe o texto'/>
          <button onClick={handleClickTextChildForParent}  className='w-full p-3 rounded-md bg-gradient-to-b from-slate-950 to-indigo-950 text-white hover:bg-indigo-800'>Confirmar</button>
         </div>
       </div>
    </div>
  )
}

export default ModalEdit