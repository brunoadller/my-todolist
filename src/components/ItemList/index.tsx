"use client"
import React from 'react'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsTrash3} from 'react-icons/bs'

type Props = {
  list: Item
  handleChangeDone: (id: number) => void
  openModalRemove: (id: number) => void
  openModalEdit: (id: number) => void 
}
const ItemList = ({list, handleChangeDone, openModalRemove, openModalEdit}: Props) => {
  return (
    <li className='flex items-center gap-3 border-b border-gray-400 my-4 py-3 '>
      <input
      name={list.text}
      checked={list.done}
      onChange={() => handleChangeDone(list.id)}  
      className="w-6 h-6"
      type="checkbox" />
      <p className={`flex-1 text-lg ${list.done? 'line-through': ''}`}>{list.text}</p>
      <button onClick = {() => openModalEdit(list.id)}>
        <AiOutlineEdit size={24} />
      </button>
      <button onClick={() => openModalRemove(list.id)}>
        <BsTrash3 size={24}/>
      </button>
    </li>
  )
}

export default ItemList