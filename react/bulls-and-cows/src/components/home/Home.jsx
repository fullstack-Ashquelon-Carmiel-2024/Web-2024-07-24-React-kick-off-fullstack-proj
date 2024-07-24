import './Home.scss';
import Header from '../header/Header';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {

  const show = [];
  for (let i=0; i<100; i++) show.push(<FontAwesomeIcon icon="fa-solid fa-cow"
                                       className='text-info'/>); 
   
  return (
    <div className="home">
        <Header title="Welcome to the Best Game Portal Ever" />
        <h1>The Best Game Portal Ever</h1>
        <div>
            { show }
        </div>
        <button>
          <Link to="/games">Start Playing!</Link>
        </button>
    </div>
  )
}
