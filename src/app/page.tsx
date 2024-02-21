"use client"
import ItemList from "@/components/ItemList"
import {MdOutlineLibraryAdd} from 'react-icons/md'
import { useReducer, useState } from "react"
import { listItemsReducer } from "@/reducer/todoReducer"
import ModalEdit from "@/components/ModalEdit"
import ModalRemove from "@/components/ModalRemove"

const Page = () => {
  const [addField, setAddField] = useState('')
  const [idEdit, setIdEdit] = useState<number>(0)
  const [idRemove, setIdRemove] = useState(0)
  //const [getId, setGetId] = useState(0)
  const [list, dispatch] = useReducer(listItemsReducer, [])
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalRemove, setShowModalRemove] = useState(false)

  const handleAddButton = () => {
    if(addField.trim() === '') return false

    dispatch({
     type: 'add',
     payload: {
      text: addField.trim()
     }
    })

    setAddField("")
  }
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(addField.trim() === '') return false
    if(e.code === 'Enter'){
      dispatch({
        type: 'add',
        payload: {
          text: addField.trim()
        }
      })
      setAddField('')
    }
    
  }
  const handleChangeDone = (id: number) => {
    dispatch({
      type: 'toggleDone',
      payload: {id: id}
    })
  }
  const handleChangeRemove = () => {
    setShowModalRemove(!showModalRemove)
    dispatch({
      type: 'remove',
      payload: {
        id: idRemove
      }
    })
  }
  const openModalRemove = (id: number) => {
    setShowModalRemove(!showModalRemove)
    setIdRemove(id)
  }
  const closeModalRemove = () => {
    setShowModalRemove(!showModalRemove)
  }
  
  const textOfChildToParent = (text: string) => {
    const item = list.find(i => i.id === idEdit)

    if(!item) return null 
    item.text = text
    dispatch({
      type: 'edit',
      payload: {
        id: idEdit,
        newText:item.text.trim()
      }
    })
  }
  const openModalEdit = (id: number) => {
    setShowModalEdit(!showModalEdit)
    setIdEdit(id)
  }
  const  closeModalEdit = () => {
    setShowModalEdit(!showModalEdit)
  }
  
  return(
    <div className="w-full h-screen bg-gradient-to-b p-3 from-slate-950 to-indigo-950 text-white">

      <div className="max-w-2xl  mx-auto py-8">

        <h1 className="text-center text-4xl font-bold my-4">Lista de Tarefas</h1>

        <div className="flex items-center gap-4 border border-gray-400 rounded-md p-4">
          <input 
          value={addField}
          onChange={e => setAddField(e.target.value)}
          onKeyUp={handleKeyUp}
          placeholder="Informe a Tarefa que deseja realizar."
          className="flex-1 border-gray-400 bg-transparent outline-none " 
          type="text" />
          <button onClick={handleAddButton}>
            <MdOutlineLibraryAdd
            list = {list}
            size={25} />
          </button>
        </div>

        <ul>
          {
            list.map((item, index) => {
              return (
                <ItemList 
                key={index} 
                list = {item}
                handleChangeDone = {handleChangeDone}
                openModalRemove={openModalRemove}
                openModalEdit = {openModalEdit}
                
                />
              )
            })
          }
        </ul>
        {showModalEdit && <ModalEdit 
            textOfChildToParent = {textOfChildToParent}
            closeModalEdit = {closeModalEdit}
            
        />}
        {showModalRemove && <ModalRemove closeModalRemove ={closeModalRemove} handleChangeRemove = {handleChangeRemove}/>} 

      </div>
    </div>
  )
}
export default Page