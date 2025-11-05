import { Routes, Route } from "react-router"
import { Home } from "../pages/Home/Home"
import { Layout } from "../components/Layout/Layout"
import App from "../pages/Form/App"

export const RotasPrivadas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/form" element={<App/>} />
        </Routes>
    )
}