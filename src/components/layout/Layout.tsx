import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/pure-functional-component">Pure Functional Component</Link>
      </li>
    </ul>
  </nav>
);

export default function Layout() {
  return (
    <main>
      <Navbar />
    </main>
  );
}
