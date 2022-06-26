import "../lectures/main/lectures.css";
import React, { Component, createRef } from 'react';
import PrismaZoom from 'react-prismazoom';
import text from '../../text/סיפורים/4a.jpg';


export const keyWords4 = 

[
 
];
 


let KeyWordsFrontEnd = [];
for (let i=0; i<keyWords4.length-1; i++) {
    KeyWordsFrontEnd.push(
        <span key={i}>
            <a href={keyWords4[i]}>{keyWords4[i]}</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
        </span>
    );
};
KeyWordsFrontEnd.push(
    <span key={keyWords4.length-1}>
        <a href={keyWords4[keyWords4.length-1]}>{keyWords4[keyWords4.length-1]}</a>
    </span>
);



class דרכו_של_אב_ודרכה_של_אם extends Component {
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
              <h1>דרכו של אב ודרכה של אם</h1>
              <h2><b>חלק א'</b></h2>
              <h2>הצופה&nbsp;&nbsp;|&nbsp;
              י"ד בחשוון ת"ש&nbsp;&nbsp;|&nbsp;
              27.10.39</h2>
            </header>

            <section className="App-wrapper">
              <PrismaZoom className="App-zoom" onZoomChange={this.onZoomChange} maxZoom={8} ref={this.prismaZoom}>
                <img src={text} alt="" className="App-image"/>
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
            {/* <div id="catlinks" className="catlinks">
                <ul>  
                    מילות מפתח: &nbsp;&nbsp;
                    {KeyWordsFrontEnd}
                </ul>
            </div> */}
            <br/>
          </div>
        )
      }
    }

export default דרכו_של_אב_ודרכה_של_אם;