import IntervieweeProvider from './context/intervieweesContext'
import MainView from "./views/MainView";

function App() {
  return (
    <div className="App">
      <IntervieweeProvider>
        <MainView />
      </IntervieweeProvider>
    </div>
  );
}

export default App;
