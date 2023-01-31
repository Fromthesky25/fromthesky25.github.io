import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice';
import counterReducer2 from './slice2';
import { pokemonApi } from './service'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        counter2: counterReducer2,
        [pokemonApi.reducerPath]: pokemonApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch