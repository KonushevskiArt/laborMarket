import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to='/' >Поиск вакансий</NavLink>
        <NavLink to='favourites' >Избранное</NavLink>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export { Layout };