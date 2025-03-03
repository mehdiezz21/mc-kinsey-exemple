import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="page home">
      <div className="container">
        <h1>Home</h1>
        <p>
          This is a normal page, without any paywall, with premium &
          free posts
        </p>
        <ul>
          <li><Link to="/premium">Premium post</Link></li>
          <li><Link to="/premium2">Premium post 2</Link></li>
        </ul>
      </div>
    </div>
  );
};
