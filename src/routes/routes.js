import Home from '~/pages/Home';

import { Fragment } from 'react';
import config from '~/configs';
import Movies from '~/pages/Movies';
import Plans from '~/pages/Plans';
import Search from '~/pages/Search';
import TvSeries from '~/pages/TvSeries';
import Watch from '~/pages/Watch';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.movies,
        component: Movies,
    },
    {
        path: config.routes.tvSeries,
        component: TvSeries,
    },
    {
        path: config.routes.plans,
        component: Plans,
    },
    {
        path: config.routes.watch,
        component: Watch,
        layout: Fragment,
    },
    {
        path: config.routes.search,
        component: Search,
    },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
