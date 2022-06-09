import { HDate, HebrewDateEvent } from "@hebcal/core";

//Gregorian Date
const d = new Date();
const day = d.getDate();
const month = d.getMonth()+1;
let zero;
    if (month<10) {
        zero = "0" } else { 
        zero = ""
    };

//Hebrew Date
const hd = new HDate();
const ev = new HebrewDateEvent(hd);


const Dates = () => {
    return (
        (day+"/"+(zero)+(month)+", ")+
        (ev.renderBrief('he'))
        )         
}


export default Dates