import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import TodoSlice from "../features/TodoSlice";

const store = configureStore ({
    reducer: {
        todos: TodoSlice,
    },
});

export default store;

// yukarıda ki reducer içinde statelerin type'ları otomatik olarak sliceleden alınarak
// tek bir rootstate type olarak döndürülüyor
export type RootState = ReturnType<typeof store.getState>; 
//appdispatch type
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;