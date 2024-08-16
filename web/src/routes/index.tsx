import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import Media from '../pages/Media/Media';
import Reviews from '../pages/Reviews/Reviews';

const AppRoutes = () =>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="media" element={<Media />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
;

export default AppRoutes;
