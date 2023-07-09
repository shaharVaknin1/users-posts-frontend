import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Posts } from "./components/posts";
import { Users } from "./components/users";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/posts/:userId" element={<Posts />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
