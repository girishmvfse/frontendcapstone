import BookingPage from '../../pages/BookingPage';
import HomePage from '../../pages/HomePage';
import './Main.css'
import { Routes, Route } from "react-router-dom";
function Main() {
    return (
        <main className='main'>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
        </main>
    );
}

export default Main;