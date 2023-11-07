import Head from "next/head";
import { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa6";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State to store error message

  const handleLogin = () => {
    // Check if username or password is empty
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Username and password are required.");
      return;
    }

    // Perform user authentication logic here
    if (
      username.trim() === "correctUsername" &&
      password.trim() === "correctPassword"
    ) {
      // Successful login, you can redirect or perform other actions here
      console.log("Login successful!");
    } else {
      // Incorrect username or password, set the error message
      setErrorMessage("Incorrect username or password. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>POS</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex h-screen items-center justify-center bg-gray-100">
          <div className="mb-4 w-96 rounded bg-white p-8 shadow-md md:w-1/3">
            <h2 className="mb-4 text-center text-lg">
              Sign in to start the session
            </h2>

            {/* Error message display */}
            {errorMessage && (
              <div className="mb-4 border-l-4 border-red-500 bg-red-100 p-2 text-red-700">
                {errorMessage}
              </div>
            )}

            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                <FaUser className="mr-2 inline-block text-gray-500" />
                Username
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 w-full rounded-md border px-3 py-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                <FaLock className="mr-2 inline-block text-gray-500" />
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 w-full rounded-md border px-3 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4 flex items-center justify-between">
              <label
                htmlFor="rememberMe"
                className="block text-sm font-medium text-gray-700"
              >
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="mr-2"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember Me
              </label>
              <button
                className="w-32 rounded-md bg-blue-500 py-2 text-white hover:bg-blue-800"
                onClick={handleLogin}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
