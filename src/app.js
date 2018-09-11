import React from 'react';
import ReactDOM from 'react-dom';
// imported exports from the react-router-dom npm 
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
);

const AddExpensePage = () => (
    <div>
      This is from my add expense component
    </div>
  );

  const EditPage = () => (
    <div>
      This is from my edit expense component
    </div>
  );

  const HelpPage = () => (
    <div>
      This is from my help component
    </div>
  );

  const NotFoundPage = () => (
    <div>
      404 - <Link to="/">Go Home</Link>
    </div>
  );

  const Header = () => (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink><br/>
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink><br/>
      <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink><br/>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
  );

const routes = (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit" component={EditPage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
  
  ReactDOM.render(routes, document.getElementById("app"));







