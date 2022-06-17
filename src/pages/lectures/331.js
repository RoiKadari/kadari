import "./main/lectures.css";
import React, { Component, createRef } from 'react';
import PrismaZoom from 'react-prismazoom';
import text from '../../text/מדיניות/331.jpg';


export const keyWords331 =

[
    "שלום", "נחלת אבות", "הקמת מדינת ישראל", "היסטוריה", "עזרא ונחמיה",
    "ערביי ישראל", "ריבונות", "יהודה ושומרון", "מנחם בגין", "אנואר סאדאת",
    "משה דיין", "הצופה", "1997" 
];
 


let KeyWordsFrontEnd = [];
for (let i=0; i<keyWords331.length-1; i++) {
    KeyWordsFrontEnd.push(
        <span key={i}>
            <a href={keyWords331[i]}>{keyWords331[i]}</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
        </span>
    );
};
KeyWordsFrontEnd.push(
    <span key={keyWords331.length-1}>
        <a href={keyWords331[keyWords331.length-1]}>{keyWords331[keyWords331.length-1]}</a>
    </span>
);



class בארזים_נפלה_שלהבת extends Component {
    constructor(props) {
        super(props)
        this.prismaZoom = createRef()
        this.state = {
          zoom: 1,
          allowZoom: true,
          allowPan: true,
        }
      }
    
      onZoomChange = (zoom) => {
        this.setState({ zoom })
      }
    
      onClickOnZoomOut = () => {
        this.prismaZoom.current.zoomOut(1)
      }
    
      onClickOnZoomIn = () => {
        this.prismaZoom.current.zoomIn(1)
      }

    
    
      render() {
        return (
          <div>
            
            <header className="App-header">
              <h1>בארזים נפלה שלהבת</h1>
              <h2>הצופה 13.01.77</h2>
            </header>

            <section className="App-wrapper">
              <PrismaZoom className="App-zoom" onZoomChange={this.onZoomChange} maxZoom={8} ref={this.prismaZoom}>
                <div className="App-image" style={{ backgroundImage: `url(${text})` }}></div>
              </PrismaZoom> </section>
              <footer className="App-footer">
                <div className="App-indicator">
                  <button className="App-button" onClick={this.onClickOnZoomOut}>
                    <svg className="App-buttonIcon" viewBox="0 0 24 24">
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4-9H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2z" />
                    </svg>
                  </button>
                  <span className="App-zoomLabel">{parseInt(this.state.zoom * 100)}%</span>
                  <button className="App-button" onClick={this.onClickOnZoomIn}>
                    <svg className="App-buttonIcon" viewBox="0 0 24 24">
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4-9h-3V8a1 1 0 0 0-2 0v3H8a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2z" />
                    </svg>
                  </button>
                </div>
              </footer>
            <div id="catlinks" className="catlinks">
                <ul>  
                    מילות מפתח: &nbsp;&nbsp;
                    {KeyWordsFrontEnd}
                </ul>
            </div>
            <br/>
          </div>
        )
      }
    }

export default בארזים_נפלה_שלהבת;