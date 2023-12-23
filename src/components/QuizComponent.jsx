import { Component } from "react";
import quizQuestions from "../resources/quizQuestion.json";
import ResultComponent from "./ResultComponent";

export default class QuizComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      questions: quizQuestions,
      showResult: false,
    };

    this.goToPreviousQuestion = this.goToPreviousQuestion.bind(this);
    this.goToNextQuestion = this.goToNextQuestion.bind(this);
    this.handleQuit = this.handleQuit.bind(this);
  }

  goToPreviousQuestion() {
    if (this.state.currentIndex >= 1) {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex - 1,
      }));
    }
  }

  goToNextQuestion() {
    if (this.state.currentIndex < this.state.questions.length - 1) {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex + 1,
      }));
    } else {
      this.setState({ showResult: true });
    }
  }

  handleQuit() {
    const userResponse = window.confirm("Do you want to quit?");
    if (userResponse) {
      this.setState({ showResult: true });
    }
  }

  render() {
    const { currentIndex, questions, showResult } = this.state;

    if (showResult) {
      return <ResultComponent />;
    }

    const currentQuestion = questions[currentIndex];

    return (
      <div className="quizPage">
        <div id="quiz">
          <h2 className="my-3">Question</h2>
          <p id="q_no">
            {currentIndex + 1} of {questions.length}
          </p>
          <p id="question" className="my-3 text-3xl">
            {currentQuestion.question}
          </p>
          <div className="options flex justify-center align-middle flex-col gap-7 my-5">
            <button>{currentQuestion.optionA}</button>
            <button>{currentQuestion.optionB}</button>
            <button>{currentQuestion.optionC}</button>
            <button>{currentQuestion.optionD}</button>
          </div>
          <div id="what" className="flex gap-7 justify-center align-middle">
            <button id="prev_button" onClick={this.goToPreviousQuestion}>
              Previous
            </button>
            <button id="nxt_button" onClick={this.goToNextQuestion}>
              Next
            </button>
            <button id="quit_button" onClick={this.handleQuit}>
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
