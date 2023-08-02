import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getActivities, postActivity } from "../../redux/actions";
import style from "./Form.module.css";
import validate from "../../Validate/validate.js";

const Form = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();

  const countries = useSelector((state) => state.allCountries);
  const orderedCountries = countries?.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: [],
  });

  const formReset = useRef(null);

  const [error, setError] = useState({});

  const handleChange = (event) => {
    setActivity({
      ...activity,
      [event.target.name]: event.target.value,
    });
    setError(
      validate({ ...activity, [event.target.name]: event.target.value })
    );
  };

  const handleCountriesChange = (event) => {
    const selectedCountries = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setActivity({
      ...activity,
      countryId: [...activity.countryId, ...selectedCountries],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(postActivity(activity));

    setActivity({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countryId: [],
    });

    formReset.current.reset();
  };

  const refresh = () => {
    dispatch(getActivities());
  };

  return (
    <div className={style.principal}>
      <Link to={"/home"}>
        <button className={style.buttons} onClick={refresh}>
          {" "}
          HOME{" "}
        </button>
      </Link>

      <h2>Create Activity</h2>
      <form className={style.form} onSubmit={handleSubmit} ref={formReset}>
        <div className={style.fieldset}>
          <div className={style.inputs}>
            <label id="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="name..."
              onChange={handleChange}
              value={activity.name}
            />
            {error.name && <p className={style.error}>{error.name}</p>}
          </div>
          <div className={style.inputs}>
            <label id="difficulty">Difficulty</label>
            <select defaultValue="" onClick={handleChange} name="difficulty">
              <option value="" disabled hidden>
                --Select--{" "}
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className={style.inputs}>
            <label id="duration">Duration</label>
            <input
              type="text"
              name="duration"
              placeholder="hours..."
              onChange={handleChange}
            />
            {error.duration && <p className={style.error}>{error.duration}</p>}
          </div>
          <div className={style.inputs}>
            <label id="season">Season</label>
            <select defaultValue="" onChange={handleChange} name="season">
              <option value="" disabled hidden>
                --Select--{" "}
              </option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
            </select>
          </div>
          <div className={style.inputs}>
            <label id="countryId">Countries</label>
            <select onChange={handleCountriesChange} name="countryId" multiple>
              {orderedCountries?.map(({ id, name }) => {
                return (
                  <option key={id} value={id}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={style.countries_selected}>
            <label id="countriesSelected">Countries selected:</label>
            {activity.countryId.length > 0 ? (
              <p>
                {orderedCountries.map((country) => {
                  if (activity.countryId.includes(country.id)) {
                    return (<div key={country.id}> - {country.name}</div>);
                  }
                })}
              </p>
            ) : (
              <p>No Countries selected</p>
            )}
          </div>
        </div>
        <button
          disabled={
            activity.season &&
            activity.difficulty &&
            !error.name &&
            !error.duration &&
            activity.countryId.length
              ? false
              : true
          }
          className={
            activity.season &&
            activity.difficulty &&
            !error.name &&
            !error.duration &&
            activity.countryId.length
              ? ""
              : style.disable
          }
        >
          Submit
        </button>
        <p className={style.error}>
          {!activity.name ||
          !activity.season ||
          !activity.difficulty ||
          !activity.countryId.length
            ? "* All fields must be completed"
            : ""}
        </p>
      </form>
    </div>
  );
};

export default Form;
