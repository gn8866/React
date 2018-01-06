// @flow

import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './action'

const Counter = (props: any) => {
    // 解構賦值，提取props中的items項目值，
    // 以及onItemDel方法
    const { counter, onCounterAdd, onCounterDel } = props

    return (
        <p>
            {counter}
            <button onClick={() => onCounterAdd(counter)}>++</button>
            <button onClick={() => onCounterDel(counter)}>--</button>
        </p>
    )
}

// 準備綁定用的mapStateToProps方法，
// 將store中的items屬性綁到這個元件的props.items屬性上
const mapStateToProps = store => ({ counter: store.counter })

// 連接Redux store
export default connect(mapStateToProps, actionCreators)(Counter)
