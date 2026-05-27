import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <main className=" dark min-h-screen w-100vw bg-background ">
      <h1 className="text-foreground">Welcome to oneLife </h1>
    </main>
    </QueryClientProvider>
  )
}

export default App
