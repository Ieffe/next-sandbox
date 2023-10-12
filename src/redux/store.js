import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '@/redux/features/counterSlice'
import { productsApi } from '@/redux/api/productsApi'
// import { setupListeners } from "@reduxjs/toolkit/query"
 
export const store = configureStore({
    reducer: {
        counterReducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([productsApi.middleware])
})

// setupListeners(store.dispatch) //refetching every focus is kinda annoying for slower machine