import "./lectures.css";

let titles = ["אמת ואמונה"];

let divvedTitles = [];
for (let i=0; i<titles.length; i++) {
  divvedTitles.push(
    <div key={i}>
      <header className="App-Category"><a href={titles[i]}><h1>{titles[i]}</h1></a></header> 
    </div>
  );
};
const Emunah = () => divvedTitles;
      
export default Emunah;