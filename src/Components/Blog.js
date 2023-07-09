import React from "react";

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainCls">
        <ul>
          <li key="angular" className="liCls">
            Angular
          </li>
          <li key="node" className="liCls">
            Node
          </li>
          <li key="react" className="liCls">
            React
          </li>
        </ul>
        <div className="numbers">
          <span>one</span>
          <span>two</span>
        </div>
        <div>
          <button className="my-button disabled btn-primary">Submit</button>
        </div>
        <div className="some-class" />
      </div>
    );
  }
}
