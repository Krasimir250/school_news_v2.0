import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/home";
import Gallery from "../screens/gallery";
import Login from "../screens/login";
import CreatedPage from "../screens/createdPage";
import Register from "../screens/register";
import Profile from "../screens/profile";
import ShowFullNew from "../screens/showFullNew";

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/writeNews" element={<CreatedPage />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/showFullNew" element={<ShowFullNew />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
