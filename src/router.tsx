import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MoviePage, MoviesPage} from "./pages";
import React from "react";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>
            },
            {
                path: 'movie/:id', element: <MoviePage/>
            }
        ]
    }
]);

export {
    router
}

