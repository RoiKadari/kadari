
export const היסטוריה=()=>{return(<h1>קטגוריה: היסטוריה</h1>)};
export const הקמת_מדינת_ישראל=()=>{return(<h1>קטגוריה: הקמת מדינת ישראל</h1>)};
export const נחלת_אבות=()=>{return(<h1>קטגוריה: נחלת אבות</h1>)};
export const עזרא_ונחמיה=()=>{return(<h1>קטגוריה: עזרא ונחמיה</h1>)};
export const שלום=()=>{return(<h1>קטגוריה: שלום</h1>)};



const longlist = ["ניסיון" , "שוב"]
longlist.forEach(element =>
    window[element] =()=>{return (<h1>קטגוריה: {element} </h1>)});

