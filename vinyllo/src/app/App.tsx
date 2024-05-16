import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../shared/api';
import Layout from './layout/layout';
import { LoginPage, MainPageContainer, Page404 } from '../pages/api';
import useGetUser from './utils/use_getUser/useGetUser';

//TODO: add lazy loading
function App() {
    const {user, setUser} = useGetUser();

  return (
    <BrowserRouter>
        <Routes>
        <Route element={
                <ProtectedRoute user={user}>
                    <Layout user={user}>
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
