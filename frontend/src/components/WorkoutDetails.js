import React from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { FaTrash } from "react-icons/fa";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return (
    <div className="bg-white my-4 mx-auto p-4 relative rounded shadow-md">
      <h4 className="mt-0 mb-2 mx-0 text-sm text-green-500 font-semibold">
        {workout.title}
      </h4>
      <p className="m-0 text-[0.9em] text-[#555] font-semibold">
        Load (kg): {workout.load}
      </p>
      <p className="m-0 text-[0.9em] text-[#555] font-semibold">
        Reps: {workout.reps}
      </p>
      <p className="m-0 text-[0.9em] text-[#555]">
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span
        onClick={handleClick}
        className="absolute top-5 right-5 bg-[#f1f1f1] p-2 rounded-md text-[#333] cursor-pointer">
        <FaTrash />
      </span>
    </div>
  );
};

export default WorkoutDetails;
