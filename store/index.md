```ts
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { IAppSlice, appSlice } from "./features/appSlice";
import { IPageSlice, pageSlice } from "./features/pageSlice";
import { IFilterSlice, filterSlice } from "./features/filterSlice";

export type AppStore = IAppSlice & IPageSlice & IFilterSlice;

export const useAppStore = create<AppStore>()(
subscribeWithSelector((set, get, api) => ({
...appSlice(set, get, api),
...pageSlice(set, get, api),
...filterSlice(set, get, api),

    // get userTodoCount() {
    //   const user = get().user;
    //   return user
    //     ? get().todos.filter((t) => t.userId === user.id).length
    //     : 0;
    // },

}))
);

// if (typeof window !== "undefined") {
// useAppStore.subscribe(
// (state) => [state.accessToken, state.refreshToken] as const,
// ([accessToken, refreshToken]) => {
// if (accessToken) {
// document.cookie = `${APP.cookieAccessTokenName}=${accessToken}; path=/; Secure; SameSite=Lax`;
// } else {
// document.cookie =
// `${APP.cookieAccessTokenName}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
// }

// if (refreshToken) {
// document.cookie = `${APP.cookieRefreshTokenName}=${refreshToken}; path=/; Secure; SameSite=Lax`;
// } else {
// document.cookie =
// `${APP.cookieRefreshTokenName}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
// }
// }
// );
// }

// useEffect(() => {
// const unsubTodos = useAppStore.subscribe(
// (s) => s.todos,
// (todos) => {
// console.log("Todos changed:", todos);
// }
// );

// const unsubUser = useAppStore.subscribe(
// (s) => s.user,
// (user, prev) => {
// if (user && !prev) console.log("User logged in:", user.name);
// else if (!user && prev) console.log("User logged out");
// }
// );

// return () => {
// unsubTodos();
// unsubUser();
// };
// }, []);
