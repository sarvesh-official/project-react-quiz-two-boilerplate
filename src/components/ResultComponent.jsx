import { Component } from "react";
import QuizComponent from "./QuizComponent";
import HomeComponent from "./Home";

export default class ResultComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayQuiz: false,
      displayHome: false,
    };

    // Bind the methods
    this.handlePlayAgain = this.handlePlayAgain.bind(this);
    this.handleBackToHome = this.handleBackToHome.bind(this);
  }

  handlePlayAgain() {
    this.setState({ displayQuiz: true });
  }

  handleBackToHome() {
    this.setState({ displayHome: true });
  }

  render() {
    const { displayQuiz, displayHome } = this.state;

    if (displayQuiz) {
      return <QuizComponent />;
    }

    if (displayHome) {
      return <HomeComponent />;
    }

    return (
      <div className="resultpage">
        <h2 className="text-5xl">Result</h2>
        <div
          id="result"
          className="my-4 flex flex-col justify-center align-middle gap-5 bg-slate-400 py-4 px-4 text-black text-2xl"
        >
          <h4>You need more practice!</h4>
          <p id="score_stat">Your score is 20%</p>
          <div className="stats">
            <div id="stat1">
              <p id="statement">Total number of questions</p>
              <p id="res">15</p>
            </div>
            <div id="stat2">
              <p id="statement">Number of attempted questions</p>
              <p id="res">9</p>
            </div>
            <div id="stat3">
              <p id="statement">Number of correct answers</p>
              <p id="res">3</p>
            </div>
            <div id="stat4">
              <p id="statement">Number of wrong answers</p>
              <p id="res">6</p>
            </div>
          </div>
          <div className="my-5 text-white">
            <button className="mr-3" onClick={this.handlePlayAgain}>
              Play Again
            </button>{" "}
            <button onClick={this.handleBackToHome}>Back to Home</button>
          </div>
        </div>
      </div>
    );
  }
}
