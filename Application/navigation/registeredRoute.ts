import {IRoute} from "../interfaces/IRoute";
import {MainPage} from "../pages/MainPage";
import {LoginPage} from "../pages/LoginPage";


export let registeredRoutes: IRoute[];

export function registeredAllRoutes() {

  registeredRoutes = [
    {page: MainPage, path: "/", isMainMenuItem: true, mainMenuItemTitle: "Home"},
    {page: LoginPage, path: "/login"}
  ];

}
