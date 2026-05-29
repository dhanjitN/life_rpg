import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <main className=" dark min-h-screen w-100vw bg-background text-foreground ">
      <h1 >Welcome to oneLife </h1>
      <h2>Wow this is awesome ! </h2>
    </main>
    </QueryClientProvider>

  )
}

export default App;
