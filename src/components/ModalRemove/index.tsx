import React, { Dispatch, SetStateAction, useState } from 'react'
type Props = {
  closeModalRemove: () => void 
  handleChangeRemove: () => void
}
const ModalRemove= ({closeModalRemove, handleChangeRemove}: Props) => {
  

 
  return (
    <div  className='bg-black/80 cursor-pointer fixed w-full h-screen top-0 left-0 right-0 bottom-0 flex  items-center justify-center'>
       <div  className='max-w-2xl absolute px-3  py-1 cursor-pointer bg-white rounded-md'>
         <h1 className='text-xl w-full border-b text-black border-gray-400 py-3'>Tem serteza que deseja excluir?</h1>
         <div className='w-full flex flex-col gap-3 py-3'>
          <button onClick={handleChangeRemove}  className='w-full p-3 rounded-md bg-gradient-to-b from-slate-950 to-indigo-950 text-white hover:bg-indigo-800'>Sim</button>
          <button onClick ={closeModalRemove} className='w-full p-3 rounded-md bg-gradient-to-b from-slate-950 to-indigo-950 text-white hover:bg-indigo-800'>Cancelar</button>
         </div>
       </div>
    </div>
  )
}

export default ModalRemove