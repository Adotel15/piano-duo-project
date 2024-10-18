import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import Media from '../pages/Media/Media';
import Reviews from '../pages/Reviews/Reviews';
import Gallery from '../pages/Gallery/Gallery';
import Music from '../pages/Music/Music';
import Repertoire from '../pages/Repertoire/Repertoire';
import Biography from '../pages/Biography/Biography';

const AppRoutes = () =>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="biography" element={<Biography />}/>
            <Route path="reviews" element={<Reviews />} />
            <Route path="media" element={<Media />} />
            <Route path="gallery" element={<Gallery />}/>
            <Route path="music" element={<Music />}/>
            <Route path="repertoire" element={<Repertoire />}/>
            <Route path="contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
;

export default AppRoutes;
