import React from "react";
import { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch('/api/workouts', {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()

    if(!response.ok){
        setError(json.error)
    }
    if(response.ok){
        setTitle('')
        setLoad('')
        setReps('');
        setError(null)
        console.log('New workout added', json)
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
      />
      <label className="text-[0.9em]">Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label className="text-[0.9em]">Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
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
