// import { createStore, applyMiddleware } from 'redux'
// import rootReducer from './reducers/rootReducer'

// const initialState = { 
//  role:'' 
// };



// function logger({ getState }) {
//   return next => action => {
//     console.log('will dispatch', action)

//     // Call the next dispatch method in the middleware chain.
//     const returnValue = next(action)

//     console.log('state after dispatch', getState())

//     // This will likely be the action itself, unless
//     // a middleware further in chain changed it.
//     return returnValue
//   }
// }

// export default store = createStore(rootReducer,initialState, applyMiddleware(logger))
import { configureStore } from '@reduxjs/toolkit'
import RolReducer from './roleSlice';
export const store = configureStore({
  reducer: {
    role : RolReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch