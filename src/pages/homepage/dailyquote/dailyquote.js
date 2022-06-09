import './dailyquote.css'
import Dates from './dates';
import Quotes from './quotes'

const Dailyquote = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
      <div className="w3-container">
        <div className="w3-panel w3-light-grey">
          <h2>הציטוט היומי: <Dates/></h2>
          <span>❝</span>
          <p className="w3-xlarge"><i><Quotes /></i></p>
        </div>
      </div>
    </div>
  );
}

export default Dailyquote;

