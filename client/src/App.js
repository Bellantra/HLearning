import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Courses from "./components/Courses/Courses";
import Privacy from "./components/Privacy/Privacy";
import Contact from "./components/Contact/Contact";
import Detail from "./components/Detail/Detail";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PruebaAdm from "./components/PanelAdmin/PruebaAdm"
import UserProfile from "./components/UserProfile/UserProfile";
import DeleteCourse from "./components/PanelAdmin/DeleteCourse";
import Cart from "./components/UserProfile/Cart";
import DetailUser from "./components/Detail/DetailUser";
import CreateCourse from "./components/PanelAdmin/CreateCourse"
import MercadoPago from "./components/MercadoPago/MercadoPago";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/user" component={UserProfile} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/courses/:id" component={Detail} />
      <Route exact path="/admin" component={PruebaAdm} />
      <Route exact path="/admcourses" component={DeleteCourse} />
      <Route exact path="/Cart" component={Cart} />
      <Route exact path="/mycourses/:id" component={DetailUser} />
      <Route exact path="/createcourse" component={CreateCourse} />
      <Route exact path="/prueba" component={MercadoPago} />
    </div>
  );
}

export default App;
