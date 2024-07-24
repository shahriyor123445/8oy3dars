import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/today/Dashboard";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Students from "./components/sticky/Students";
import About from "./components/calendar/About";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";
import SideBar from "./components/sidebar/SideBar";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="flex">
        <SideBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/students" element={<Students />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Provider>
  );
}

export default App;
