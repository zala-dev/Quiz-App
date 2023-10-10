import Header from "./Header/Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "../screens/StartScreen";
import Question from "./Question/Question";
import NextButton from "./Footer/NextButton";
import Progress from "./Header/Progress";
import FinishScreen from "../screens/FinishScreen";
import Timer from "./Footer/Timer";
import Footer from "./Footer/Footer";
import { useQuiz } from "../contexts/QuizContext";

function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
