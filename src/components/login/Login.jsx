import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";



function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  async function login() {
  setError(null);
  setLoading(true);  // Corrected to true

  try {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    });
    if (!response.ok) {
      throw new Error('Invalid credentials'); // Provide a specific error message
    }

    const user = await response.json();
    setUser(user);
    saveUser(user);
    navigate("/");  // Ensure you are navigating to a valid route after login
  } catch (error) {
    console.error(error);
    setError(error);
  } finally {
    setLoading(false);
  }
}

  async function handleSubmit(e) {
    e.preventDefault();
    login();
  }

  return (
    <div className="bg-gray-200 w-[500px] mt-12 rounded-3xl h-[620px]">
      <h2 className="text-3xl font-bold pt-32 ml-16">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="">
          {/* <label htmlFor='userName'>Username</label> */}
          <input
            className="w-[300px] h-10 ml-16 mt-8 rounded-lg border-black border-2 pl-4"
            type='text'
            value={userName}
            id='userName'
            required
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="">
          {/* <label htmlFor='password'>Password</label> */}
          <input
            className="w-[300px] h-10 ml-16 mt-8 rounded-lg border-black border-2 pl-4"
            type='password'
            value={password}
            id='password'
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p >Error:</p>}
        <div>
          <button className="w-[300px] h-10 ml-16 bg-green-400 rounded-lg mt-8 text-xl font-bold text-white" type='submit' disabled={loading}>
            {loading ? "Loading..." : "Sign In"}
          </button>
        </div>
      </form>
      <hr className="w-[300px] h-[2px] mt-4 bg-gray-500 ml-16" />
      <div className="flex items-center ml-16 mt-6 font-bold">
        <button className="bg-white w-32 rounded-xl h-10 flex items-center justify-center gap-2">
          <FcGoogle />
          Google
        </button>
        <button className="bg-white w-32 rounded-xl h-10 ml-12 flex items-center justify-center gap-2">
          <BiLogoFacebookCircle />
          Facebook
        </button>
      </div>
      <p className="ml-28 mt-4 cursor-pointer">Don't have an account? Sign up</p>
    </div>
  );
}
