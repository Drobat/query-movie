import { QueryClient, QueryClientProvider } from "react-query";
import GetMovies from "./components/GetMovies";


function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <GetMovies />
      </QueryClientProvider>
      </>)
}

export default App;
