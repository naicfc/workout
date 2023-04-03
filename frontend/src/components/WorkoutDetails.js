import React from "react";

const WorkoutDetails = ({ workout }) => {
  return (
    <div className="bg-white my-4 mx-auto p-4 relative rounded shadow-md">
      <h4 className="mt-0 mb-2 mx-0 text-sm text-green-500 font-semibold">{workout.title}</h4>
      <p className="m-0 text-[0.9em] text-[#555] font-semibold">Load (kg): {workout.load}</p>
      <p className="m-0 text-[0.9em] text-[#555] font-semibold">Reps: {workout.reps}</p>
      <p className="m-0 text-[0.9em] text-[#555]">{workout.createdAt}</p>
    </div>
  );
};

export default WorkoutDetails;
