import "./lectures.css";

let titles = ['כל נדרי והוראת התנ"ך', "לתקנת החינוך"];

let divvedTitles = [];
for (let i=0; i<titles.length; i++) {
  divvedTitles.push(
    <div key={i}>
      <header><h1><a href={titles[i]} className="App-Category">{titles[i]}</a></h1></header> 
    </div>
  );
};
const Chinuch = () => divvedTitles;

export default Chinuch;