import React from "react";
// import axios from "axios";


export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newscount: 0,
    };
  }

  componentDidMount() {
    this.func(90, 80);
  }

  func = async (no1, no2) => {
    // let url = "http://localhost/api/article-list";
    // let options = {
    //   method: "GET",
    //   url: url,
    // };

    // let response = await axios(options);
    // return response.data;
  };

  signOut() {
    this.func(90, 80);
  }

  checkBoxChecked(id, test) {
    return 4
  }

  loadData(id, test) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.setState({
          newscount: 50,
        });
        resolve({ me: 12 });
      }, 2000);
    });
  }
  render() {
    return (
      <div>
        Hello
        <button onClick={() => this.signOut()}>
          Sign Out
          <input
            type="text"
            id="firstname"
            value="codeimprove"
            name="firstname"
          />
        </button>
      </div>
    );
  }
}
