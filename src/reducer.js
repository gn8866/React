// @flow

// @Reducer
//
// Add Item: action payload = action.payload
// Del Item: action payload = action.id
// 使用純粹函式的陣列unshift，不能有副作用
// state(狀態)一開始的值是空陣列`state=[]`
import { combineReducers } from 'redux'
import { ADD_ITEM, DEL_ITEM, INIT_ITEMS, ADD_COUNTER, DEL_COUNTER } from './actionTypes'

function items(state = [], action) {
    switch (action.type) {
        case ADD_ITEM:
            {
                return [{
                    id: action.payload.id,
                    text: action.payload.text,
                }, ...state]
            }

        case DEL_ITEM:
            {
                return state.filter(item => item.id !== action.id)
            }
        case INIT_ITEMS:
            {
                return [...action.items]
            }
        default:
            return state
    }
}

function counter(state = 0, action) {

    switch (action.type) {
        case ADD_COUNTER:
            {
                return action.count + 1;
            }

        case DEL_COUNTER:
            {
                return action.count - 1;
            }

        default:
            return state
    }
}

const itemApp = combineReducers({
    items,
    counter
})

export default itemApp
