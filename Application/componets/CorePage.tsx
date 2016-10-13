import * as React from "react";

export interface ICorePageProps extends React.ClassAttributes<any> {
}

export class CorePageState<TProps extends ICorePageProps> {
  props: TProps;

  constructor(props: TProps) {
    this.props = props;
  }
}

export class CorePage<TProps extends ICorePageProps,TState extends CorePageState<any>> extends React.Component<TProps,TState> {
  constructor(props: TProps, context: any) {
    super(props, context);
    this.props = props;
    this.context = context;
    this.state = new CorePageState<any>(props) as any;
  }

  render(): JSX.Element {
    return (
      <div>
        это core page
        {this.props.children}
      </div>
    );
  }

}


