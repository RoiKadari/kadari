import "./lectures.css";

let titles = ["דרכו של אב ודרכה של אם"];

let divvedTitles = [];
for (let i=0; i<titles.length; i++) {
  divvedTitles.push(
    <div key={i}>
      <header><h1><a href={titles[i]} className="App-Category">{titles[i]}</a></h1></header>  
    </div>
  );
};
const Stories = () => divvedTitles;
  
export default Stories;