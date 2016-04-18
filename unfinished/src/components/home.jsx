import React  from 'react';
import {Link} from 'react-router'

const Home = (p) => {
  return <div style={{textAlign: 'center'}}>
    <h1>Welcome!</h1>
    <button>
      <Link to="/star-trek">Star Trek</Link>
    </button>
  </div>
}

export default Home;
