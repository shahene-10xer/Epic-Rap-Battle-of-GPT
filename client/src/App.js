import Launch from './Launch';
import Stage from './Stage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Launch />} />
                <Route path='/freestyle' element={<Stage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
