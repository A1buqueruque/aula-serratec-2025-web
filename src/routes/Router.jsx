import { Routes, Route } from "react-router"
import { Home } from "../pages/Home/Home"
import { NotFound } from "../pages/PageNotFound/NotFound"
import { Layout } from "../components/Layout/Layout"
import App from "../pages/Form/App"

export const Router = () => {
    return (
        <Routes>
            <Route element={<Layout />} >
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<App />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}