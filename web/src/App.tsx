import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Button } from "./components/ui/button";
import { googleLogin } from "./lib/auth-client";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className=" dark min-h-screen  md:w-screen bg-secondary text-foreground    ">
        <section className="pt-10 flex justify-end ">
          <h1 className="text-xl text-red-200 font-bold underline px-5">oneLife</h1>
        </section>
        <section className="pt-10 flex items-center justify-center flex-col">
          <article className="text-pretty">
            <h2 className="text-lg">Keep a track of </h2>
            <h1 className="text-2xl font-semibold text-red-100">YOUR BIG DREAM </h1>
          </article>
          <article className="pt-5">
            <ul className="list-disc">
              <li>Minimal</li>
              <li>no Todos</li>
              <li>no headaches </li>
            </ul>
            
          </article>
        </section>
        <section className="pt-10 flex items-center justify-center">
          <Button className="text-2xl p-5 hover:cursor-pointer" onClick={googleLogin}>Sign in with Google </Button>
        </section>
      </main>
    </QueryClientProvider>

  )
}

export default App;
