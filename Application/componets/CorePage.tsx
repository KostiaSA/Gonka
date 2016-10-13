import * as React from "react";
import {MainNavigation} from "./MainNavigation";

export interface ICorePageProps extends React.ClassAttributes<any> {
}

export class CorePageState {

}

export class CorePage extends React.Component<ICorePageProps,CorePageState> {
  constructor(props: ICorePageProps, context: any) {
    super(props, context);
    this.props = props;
    this.context = context;
    this.state = new CorePageState() as any;
  }


  render(): JSX.Element {
    return (
        <div>
          <MainNavigation/>
          {this.props.children}
        </div>
    );
  }

}


