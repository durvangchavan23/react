import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <div className="w-full min-h-screen flex flex-col items-center justify-center space-y-8">
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
