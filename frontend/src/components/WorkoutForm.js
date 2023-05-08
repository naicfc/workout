import React from "react";
import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      setEmptyFields([]);
      console.log("New workout added", json);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <h3 className="font-semibold mb-4">Add a New Workout</h3>
      <label className="text-[0.9em]">Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "border-red-500" : ""}
      />
      <label className="text-[0.9em]">Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes("load") ? "border-red-500" : ""}
      />
      <label className="text-[0.9em]">Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes("reps") ? "border-red-500" : ""}
      />
      <button className="bg-green-500 border-0 text-white p-2 rounded cursor-pointer mt-2 text-sm ">
        Add Workout
      </button>
      {error && (
        <div className="text-red-600 p-2  bg-[#ffefef] border-solid border-red-500 my-5 mx-0">
          {error}
        </div>
      )}
    </form>
  );
};

export default WorkoutForm;
