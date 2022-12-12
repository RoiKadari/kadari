import "./lectures.css";

let titles = ["אחדות יהודית אחרי קום המדינה", "בארזים נפלה שלהבת", "ומי כעמך ישראל גוי אחד בארץ", "על הסוציאליזם הנופל", "קפאון והתחדשות"];

let divvedTitles = [];
for (let i=0; i<titles.length; i++) {
  divvedTitles.push(
    <div key={i}>
      <header><h1><a href={titles[i]} className="App-Category">{titles[i]}</a></h1></header>  
    </div>
  );
};
const Mediniyut = () => divvedTitles;

export default Mediniyut;