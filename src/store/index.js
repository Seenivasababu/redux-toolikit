import {createSlice, configureStore} from '@reduxjs/toolkit'

const songsSlice = createSlice({
   name : 'song',
   initialState : [],
   reducers : {
      addSong(state,action){
         state.push(action.payload)
      },
      removeSong(state,action){
         const index = state.indexOf(action.payload)
         state.splice(index,1)
      }
   }
})

const store = configureStore({
   reducer : {
      songs : songsSlice.reducer
   }
})

export {store}

export const {addSong,removeSong} = songsSlice.actions

const iniState = store.getState()
console.log(iniState);

store.dispatch({
   type : 'song/addSong',
   payload : 'Hi store out there'
})

const finalState = store.getState()
console.log(finalState);

