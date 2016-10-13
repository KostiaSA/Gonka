import {registeredRoutes} from "./registeredRoute";
import {IRoute} from "../interfaces/IRoute";
import {browserHistory} from "react-router";

export function routePush(page: Function) {
  let route = registeredRoutes.filter((item: IRoute)=>item.page === page)[0];
  if (route === undefined)
    console.error("routePush(): invalid route: ", page);
  else
    browserHistory.push(route.path);

}
