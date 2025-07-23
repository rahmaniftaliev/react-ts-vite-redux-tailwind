import { createSlice,createEntityAdapter } from '@reduxjs/toolkit'
import type { EntityId, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './../../index' ; 

interface CounterState {
  id: EntityId;
  value: number
}

const counterAdapter = createEntityAdapter<CounterState>({
  sortComparer: (a, b) => a.value - b.value,
})
const initialState = counterAdapter.getInitialState()



const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<EntityId>) => {
      const entity = state.entities[action.payload];
      if (entity) {
        entity.value += 1;
      }
    },
    decrement: (state, action: PayloadAction<EntityId>) => {
      const entity = state.entities[action.payload];
      if (entity) {
        entity.value -= 1;
      }
    },
    incrementByAmount: (state, action: PayloadAction<{ id: EntityId; amount: number }>) => {
      const { id, amount } = action.payload;
      const entity = state.entities[id];
      if (entity) {
        entity.value += amount;
      }
    },
    reset: (state, action: PayloadAction<EntityId>) => {
      const entity = state.entities[action.payload];
      if (entity) {
        entity.value = 0;
      }
    },
  },
})

export const selectCounterById = (state: RootState, id: EntityId) => state.counter.entities[id]?.value;

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

// Selector (Typed)
export const selectCounters = (state: RootState) => counterAdapter.getSelectors().selectAll(state.counter);

export default counterSlice.reducer
