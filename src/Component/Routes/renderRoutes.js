import {  Routes, Route, Navigate } from 'react-router-dom';

import routesLinks from "../../helper/RoutedLink";

const RenderRoutes = () => {
    return (
        <Routes>
            ({ 
                routesLinks.map((r, i)=> {
                return <Route key={i} exact path={r.routeName} element={<r.component {...r.props}/>  }/>})
            })
            
            <Route path="*" element={<Navigate to="/" />} />    
        </Routes>
    )
}

export default RenderRoutes;
