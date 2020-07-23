import React, { Component, MouseEvent } from "react";

type ButtonProps = {
  type?: "button" | "submit";
  name?: string;
  text?: string;
  isEnabled: boolean;
  clickCallback?: (data: object) => void;

  // corner-radius
  // backgroundColor
  // text: align, size, letterspace // if it has multiple lines: line height
  // outline border: flag, color?, thickness
};

interface IButtonState {
  isDoubleClicked: boolean;
}

export class Button extends Component<ButtonProps, IButtonState> {
  static defaultProps = {
    type: "button",
    name: "",
    text: "",
    clickCallback: null,
    isEnabled: true,
  };

  constructor(props: ButtonProps) {
    super(props);

    const _ = this;

    _.state = {
      isDoubleClicked: false,
    };

    _._handleClick = _._handleClick.bind(_);
  }

  // componentWillMount() {}
  // componentDidMount() {}
  // shouldComponentUpdate(nextProps, nextStates) { }
  // componentWillUnmount() {}

  render() {
    const _ = this,
      { type, name, text, isEnabled } = _.props;

    return (
      <button
        type={type}
        name={name}
        disabled={!isEnabled}
        onClick={_._handleClick}
      >
        {text}
      </button>
    );
  }

  // TODO: We want to check clicked, double clicked, long tapped
  private _handleClick(evt: MouseEvent) {
    evt.preventDefault();

    const _ = this,
      { clickCallback } = _.props;

    clickCallback?.call(null, { evt: evt, state: _.state });
  }
}

// TODO: make Functional Component
// export const Button: FunctionComponent<ButtonProps> = ({ text = '', width = 140, height = 30, clickCallback }) => <button onClick={click}>{text}</button>;

/*
Button.propTypes = {
  text: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};
*/
