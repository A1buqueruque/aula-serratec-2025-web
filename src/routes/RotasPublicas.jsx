import { Routes, Route } from "react-router"
import { Login } from "../pages/Login/Login"
export const RotasPublicas = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    )
}