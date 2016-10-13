import * as React from "react";

export interface IRoute {
  path: string;
  page: React.ComponentClass<any>;
  isMainMenuItem?: boolean;
  mainMenuItemTitle?: string;
}
