import {
  ChakraProvider
} from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";
import "./App.css";
import AppRoutes from "./routes/routes";


function App() {
  return (
    <ChakraProvider value={system}>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
