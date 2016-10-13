import * as React from "react";
import {CorePage} from "../componets/CorePage";

export class LoginPage extends React.Component<any,any> {
  constructor(props: any, context: any) {
    super(props, context);
    this.props = props;
    this.context = context;
  }

  render(): JSX.Element {
    return (
        <CorePage>
          <div>Введите пароль</div>
        </CorePage>
    );
  }

}


