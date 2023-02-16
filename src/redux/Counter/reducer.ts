import { createSlice } from '@reduxjs/toolkit'
import action from './action'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    erro: ''
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    error: (state, action) => {
        state.erro = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

const { reducer } = counterSlice

export const Actions = counterSlice.actions;

export default reducer