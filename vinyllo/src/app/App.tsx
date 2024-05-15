import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../shared/api';
import Layout from './layout/layout';
import { LoginPage, MainPageContainer, Page404 } from '../pages/api';
import { useEffect, useState } from 'react';
import { TUser } from '../pages/main_page/model/mainPageContainer';

function App() {
  const [user, setUser] = useState<TUser | null>(()=>{
    const storedUser = localStorage.getItem('user');
    return storedUser? JSON.parse(storedUser) : null
  });

  return (
    <BrowserRouter>
        <Routes>
        <Route element={
                <ProtectedRoute user={user}>
                    <Layout>
                    </Layout>
                </ProtectedRoute>
        }>
            <Route path={"/"} element={<MainPageContainer user={user} setUser={setUser}/>}/>
            <Route path={"/albums"} element={<MainPageContainer user={user} setUser={setUser}/>}/>
            <Route path={"/favorites"} element={<div>Favorites</div>}/>
            <Route path={"/community"} element={<div>Community</div>}/>
            <Route path={"/settings"} element={<div>Settings</div>}/>
            <Route path={"/account"} element={<div>Account</div>}/>
        </Route>
        <Route path="/login" element={<LoginPage setUser={setUser}/>}/>
        <Route path="*" element={<Page404/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
