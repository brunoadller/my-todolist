
type AddAction = {
    type: 'add'
    payload: {
        text: string
    }
}
type EditAction = {
    type: 'edit'
    payload: {
        id: number,
        newText: string
    }
}
type ToggleDoneAction = {
    type: 'toggleDone'
    payload: {
        id: number
    }
}
type RemoveAction = {
    type: 'remove'
    payload: {
        id: number
    }

}

type ListItemsActions = AddAction | EditAction | ToggleDoneAction | RemoveAction

export const listItemsReducer = (list: Item[], action: ListItemsActions): Item[] => {

    switch(action.type){
        case 'add':
            return [...list, {
                id: list.length + 1,
                text: action.payload.text,
                done: false
            }]
        case 'edit':
            return list.map(item => {
                if(item.id === action.payload.id){
                    item.text === action.payload.newText
                }
                return item
            })
        case 'toggleDone':
            return list.map(item => {
                if(item.id === action.payload.id) item.done = !item.done
                return item
            })
        case 'remove':
            return list.filter(item => item.id !== action.payload.id)
        
        default:
            return list

    }
    return list
}