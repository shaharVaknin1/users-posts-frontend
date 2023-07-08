import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Users } from "./components/users";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      <Users />
    </QueryClientProvider>
  );
}

export default App;
