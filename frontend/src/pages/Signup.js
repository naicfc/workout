import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <form
        onSubmit={handleSubmit}
        className="shadow-md bg-white px-6 py-10 rounded">
        <h3 className="font-medium text-xl text-center py-4">Sign up</h3>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="p-3 rounded mb-2"
          placeholder="email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="p-3 rounded mb-2"
          placeholder="password"
        />
        <button
          className="bg-green-500 text-white w-full p-3 rounded"
          disabled={isLoading}>
          Sign up
        </button>
        {error && (
          <div className="flex items-center justify-center p-2">
            <div className="p-1 bg-red-50 text-sm rounded text-red-500 border-red-200 border">
              {error}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Signup;
