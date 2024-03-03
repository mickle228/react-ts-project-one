import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import './index.css';
import {router} from "./router";
import {ThemeProvider} from "./hoc/ThemeProvider";
import {SearchProvider} from "./hoc/SearchProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider>
        <SearchProvider>
            <RouterProvider router={router}/>
        </SearchProvider>
    </ThemeProvider>
);


