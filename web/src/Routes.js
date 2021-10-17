// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import UsersLayout from 'src/layouts/UsersLayout';
import DashLayout from 'src/layouts/DashLayout';

const Routes = () => {
  return (
    <Router>
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={DashLayout}>
        <Route path="/dash" page={DashPage} name="dash" />
      </Set>
      <Route path="/" page={LandingPage} name="landing" />
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
