import AddNew from "./compenents/AddNew";
import AllPosts from "./compenents/AllPosts";
import Home from "./compenents/Home";
import NavBar from "./compenents/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SinglePost from "./compenents/SinglePost";
import EditPost from "./compenents/EditPost";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path="/addnew" element={<AddNew />} />
          <Route path="/allposts" element={<AllPosts/>}></Route>
          <Route path="allposts/:id" element={<SinglePost/>}></Route>
          <Route path="allposts/:postId/edit" element={<EditPost/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}
