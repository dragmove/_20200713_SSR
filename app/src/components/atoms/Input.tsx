import React, { Component, SyntheticEvent } from "react";

export class Input extends Component {
  render() {
    return (
      <>
        <input type="text" onInput={this._handleInput} />
      </>
    );
  }

  _handleInput(evt: SyntheticEvent) {
    evt.preventDefault();
    console.log("foo");
  }
}
