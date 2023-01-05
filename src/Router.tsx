import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Issue } from "./pages/Issue";
import { DefaultLayout } from "./styles/layouts/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/:number" element={<Issue/>}/>
            </Route>
        </Routes>
    );
}