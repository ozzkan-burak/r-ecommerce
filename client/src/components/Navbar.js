import { Routes, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
  )
}

export default Navbar;