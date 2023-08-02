import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import { getCountries, getActivities } from "./redux/actions.js";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home countries={countries} />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
