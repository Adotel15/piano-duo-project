import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import Media from '../pages/Media/Media';
import Reviews from '../pages/Reviews/Reviews';
import Gallery from '../pages/Gallery/Gallery';
import Music from '../pages/Music/Music';
import Repertoire from '../pages/Repertoire/Repertoire';
import Biography from '../pages/Biography/Biography';

import { routes } from '../constants/routes';

const AppRoutes = () =>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path={routes.biography} element={<Biography />}/>
            <Route path={routes.reviews} element={<Reviews />} />
            <Route path={routes.media} element={<Media />} />
            <Route path={routes.gallery} element={<Gallery />}/>
            <Route path={routes.music} element={<Music />}/>
            <Route path={routes.repertoire} element={<Repertoire />}/>
            <Route path={routes.contact} element={<Contact />} />
        </Routes>
    </BrowserRouter>
;

export default AppRoutes;
