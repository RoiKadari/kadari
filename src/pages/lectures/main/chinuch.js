import "./lectures.css";

let titles = ["כל נדרי והוראת התנך"];

let divvedTitles = [];
for (let i=0; i<titles.length; i++) {
  divvedTitles.push(
    <div key={i}>
      <header className="App-Category"><a href={titles[i]}><h1>{titles[i]}</h1></a></header> 
    </div>
  );
};
const Chinuch = () => divvedTitles;

export default Chinuch;