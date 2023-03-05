import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/About/About";
import Article from "./pages/Article/Article";
import Course from "./pages/Course/Course";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Panel from "./pages/Panel/Panel";
import Setting from "./pages/Setting";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  {
    path: "/article/*",
    element: <Article />,
    children: [
      { path: "php", element: <h2>php article</h2> },
      { path: "js", element: <h2>js article</h2> },
      { path: "react", element: <h2>react article</h2> },
    ],
  },
  { path: "/login", element: <Login /> },
  {
    path: "/panel",
    element: (
      <PrivateRoute>
        <Panel />
      </PrivateRoute>
    ),
  },
  {
    path: "/setting",
    element: (
      <PrivateRoute>
        <Setting />
      </PrivateRoute>
    ),
  },
  { path: "/course/:courseId", element: <Course /> },
];

export default routes;
