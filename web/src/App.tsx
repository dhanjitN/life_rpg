import { authClient } from "./lib/auth-client"

function App() {
  return (
    <>
      <h2 className="bg-blue-600 text-2xl ">hello from the home </h2>
      <button onClick={() => {
        console.log("buton clicked")
        authClient.signIn.social({ provider: "google", callbackURL: "http://localhost:5173/status" });
      }}>
        LOGIN WITH GOOGLE
      </button>
    </>
  )
}

export default App
