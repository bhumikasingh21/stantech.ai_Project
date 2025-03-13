import Header from "./components/header/Header";
import AppRoutes from "./router";
import { BrowserRouter } from "react-router-dom";
// import './styles/responsive.css'; 
// import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
