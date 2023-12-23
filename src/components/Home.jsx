import { Component } from "react";
import QuizComponent from "./QuizComponent";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { next: false };
  }

  render() {
    return this.state.next ? (
      <QuizComponent />
    ) : (
      <div>
        <h1 className="text-[80px] my-5">QUIZ APP</h1>
        <button
          className="px-5 py-3 text-3xl my-3"
          onClick={() => {
            this.setState({ next: true });
          }}
        >
          Play
        </button>
      </div>
    );
  }
}
