// @flow
import { ADD_ITEM, DEL_ITEM, FETCH_ITEMS, INIT_ITEMS, ADD_COUNTER, DEL_COUNTER } from './actionTypes'

// onItemAdd處理產生'ADD_ITEM'的動作物件，注意傳入參數是payload
export const onItemAdd = (payload: { id: number, text: string }) => (
    { type: ADD_ITEM, payload }
)

// onItemAdd處理產生'ADD_ITEM'的動作物件，注意傳入參數是id
export const onItemDel = (id: number) => ({ type: DEL_ITEM, id })

export const onCounterAdd = (count: number) => ({ type: ADD_COUNTER, count })

export const onCounterDel = (count: number) => ({ type: DEL_COUNTER, count })

export const onInitData = (items: Array<Object>) => ({ type: INIT_ITEMS, items })

// onFecthData是副作用函式，真正的執行程式碼在fetchMiddleware裡，執行後會到這個函式來
export const onFecthData = () => (
    {
        type: FETCH_ITEMS,
        cb: (response: Array<Object>, dispatch: Function) => dispatch(onInitData(response)),
    }
)


