import classes from './NoQuotesFound.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Link className='btn' to='/new-quote'>
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;
