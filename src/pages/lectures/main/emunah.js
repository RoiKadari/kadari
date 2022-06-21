import "./lectures.css";

let titles = ["אמת ואמונה"];

let divvedTitles = [];
for (let i=0; i<titles.length; i++) {
  divvedTitles.push(
    <div key={i}>
      <header><h1><a href={titles[i]} className="App-Category">{titles[i]}</a></h1></header>  
    </div>
  );
};
const Emunah = () => divvedTitles;
      
export default Emunah;