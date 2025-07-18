# Redux Store Setup

This project uses Redux Toolkit for state management with TypeScript support.

## Structure

```
src/
├── store/
│   ├── index.ts              # Store configuration
│   ├── hooks.ts              # Typed hooks for useDispatch and useSelector
│   ├── features/
│   │   └── counter/
│   │       └── counterSlice.ts # Counter slice with actions and reducer
│   └── README.md             # This file
```

## Key Features

- **Redux Toolkit** - Modern Redux pattern with less boilerplate
- **TypeScript Support** - Fully typed store, actions, and selectors
- **Typed Hooks** - Pre-configured useAppDispatch and useAppSelector hooks
- **Example Counter Slice** - Demonstrates how to create slices with actions

## Usage

### Creating a new slice

```typescript
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface MyState {
  value: string
}

const initialState: MyState = {
  value: ''
}

const mySlice = createSlice({
  name: 'mySlice',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

export const { setValue } = mySlice.actions
export default mySlice.reducer
```

### Using in components

```typescript
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { increment, decrement } from '../store/features/counter/counterSlice'

function MyComponent() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}
```

## Adding to the store

1. Create your slice in `src/store/features/[feature]/[feature]Slice.ts`
2. Import it in `src/store/index.ts`
3. Add it to the store configuration:

```typescript
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import myNewReducer from './features/myNewFeature/myNewSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    myNewFeature: myNewReducer, // Add your new slice here
  },
})
```
