import { configureStore, createSlice } from '@reduxjs/toolkit';


const databaseSlice = createSlice({
    name: 'database',
    initialState: {
        isDatabaseMocked: false,
    },
    reducers: {
        toggleDatabaseMock: state => {
            state.isDatabaseMocked = !state.isDatabaseMocked;
            console.log("hit", state.isDatabaseMocked)
        }
    }
});


export const { toggleDatabaseMock } = databaseSlice.actions;


const store = configureStore({
    reducer: {
        database: databaseSlice.reducer
    }
});

export default store;
