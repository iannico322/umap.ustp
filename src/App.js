import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";

import "./App.css";
import "animate.css";

// import MontlyReport from "./components/pdf/pdf1";
// import DailyReport from "./components/pdf/pdf2";
// import Developers from "./screen/developers/developers";
// import WeeklyReport from "./components/pdf/pdf3";

import Loader from "./components/loader/load";

const Welcome = lazy(() =>
  wait(1300).then(() => import("./screen/welcome/welcome"))
);

const ForgotPassword = lazy(() =>
  wait(1300).then(() =>
    import("./screen/authentication/forgotPassword/forgot-password")
  )
);

const ResetPassword = lazy(() =>
  wait(1300).then(() =>
    import("./screen/authentication/forgotPassword/reset-password")
  )
);

const Activation = lazy(() =>
  wait(1300).then(() => import("./screen/authentication/signUp/activation"))
);

const Guest = lazy(() =>
  wait(500).then(() => import("./screen/user/guest/guest"))
);

const Main = lazy(() =>
  wait(500).then(() => import("./screen/user/main/main"))
);
const Home = lazy(() =>
  wait(500).then(() => import("./screen/user/main/home"))
);
const Profile = lazy(() =>
  wait(500).then(() => import("./screen/user/profile/profile"))
);

const Admin = lazy(() => wait(1000).then(() => import("./screen/admin/admin")));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/umap.ustp" />} />
        <Route
          path="/umap.ustp"
          element={
            <>
              <Suspense fallback={<Loader />}>
                <Welcome />
              </Suspense>
            </>
          }
        />
        <Route
          path="/umap.ustp/guest"
          element={
            <Suspense fallback={<Loader />}>
              <Guest />
            </Suspense>
          }
        />

        <Route
          path="/umap.ustp/activation/:uid/:token"
          element={
            <Suspense fallback={<Loader />}>
              <Activation />
            </Suspense>
          }
        />

        <Route
          path="/umap.ustp/forgot-password"
          element={
            <Suspense fallback={<Loader />}>
              <ForgotPassword />
            </Suspense>
          }
        />

        <Route
          path="/umap.ustp/reset-password/:uid/:token"
          element={
            <Suspense fallback={<Loader />}>
              <ResetPassword />
            </Suspense>
          }
        />

        <Route
          path="/umap.ustp/umap"
          element={
            <Suspense fallback={<Loader />}>
              <Main />
            </Suspense>
          }
        >
          <Route path="/umap.ustp/umap/main" element={<Home />} />
          <Route path="/umap.ustp/umap/profile" element={<Profile />} />
        </Route>

        <Route
          path="/umap.ustp/admin"
          element={
            <Suspense fallback={<Loader />}>
              <Admin />
            </Suspense>
          }
        />

        {/* <Route path="/umap" element={<Welcome />} />
        <Route path="devs" element={<Developers />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot" element={<Forgotpass />} />
        <Route path="profile" element={<Profile />} />
        <Route path="admin" element={<Admin />} />
        
        <Route path="guest" element={<Guest />} />
        <Route path="register" element={<Register />} />
        <Route path="reportMonth" element={<MontlyReport/>} />
        <Route path="reportDay" element={<DailyReport  />} />
        <Route path="reportWeek" element={<WeeklyReport  />} /> */}
      </Routes>
    </Router>
  );
}
function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
export default App;
