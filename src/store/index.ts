import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userReducer } from "./slices/userSlice";
import { userApi } from "./apis/userApi";
import { entityApi } from "./apis/entityApi";
import { formApi, formListApi } from "./apis/formApi";
import { genaiApi } from "./apis/genaiApi";

const store = configureStore({
    reducer: {
        userLegacy: userReducer,
        [userApi.reducerPath]: userApi.reducer,
        [entityApi.reducerPath]: entityApi.reducer,
        [formApi.reducerPath]: formApi.reducer,
        [formListApi.reducerPath]: formListApi.reducer,
        [genaiApi.reducerPath]: genaiApi.reducer
    },
    middleware: (curryGetDefaultMiddleware) => {
        return curryGetDefaultMiddleware()
            .concat(userApi.middleware)
            .concat(entityApi.middleware)
            .concat(formApi.middleware)
            .concat(formListApi.middleware)
            .concat(genaiApi.middleware);
    }
});

setupListeners(store.dispatch);

export { store };
export { useUserQuery } from './apis/userApi';
export {
    useEntityQuery,
    useEntityListQuery,
    useEntityByTypeListQuery,
    useNewEntityMutation,
    useNewEntityBatchMutation
} from './apis/entityApi';
export {
    useFormQuery,
    useFormListQuery
} from './apis/formApi';
export {
    useGenaiQuery,
    useGenAIJsonPMutation,
    useGenAIBatchJsonPMutation
} from './apis/genaiApi';