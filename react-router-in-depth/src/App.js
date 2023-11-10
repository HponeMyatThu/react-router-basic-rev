import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayOut from "./layouts/RootLayOut";
import Home from "./pages/Home";
import About from "./pages/About";
import HelpLayOut from "./layouts/HelpLayOut";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerLayOut from "./layouts/CareerLayOut";
import CareerDetail, { careerDetailLoader } from "./pages/careers/CareerDetail";
import NotFound from "./pages/NotFound";
import CareerError from "./pages/careers/CareerError";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayOut />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} action={contactAction}/>
        </Route>
        <Route path="careers" element={<CareerLayOut />} errorElement={<CareerError />}>
          <Route index element={<Careers/>} loader={careersLoader}/>
          <Route path=":id" element={<CareerDetail />} loader={careerDetailLoader}/>
        </Route>

        <Route path="*" element={<NotFound />}/>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
