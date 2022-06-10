import "./main/lectures.css";
import React, { Component, createRef } from 'react'
import PrismaZoom from 'react-prismazoom';
import text from '../../text/מדיניות/331.jpg';


class Lecture331 extends Component {
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
                    <a href="שלום">שלום</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="נחלת אבות">נחלת אבות</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="הקמת מדינת ישראל">הקמת מדינת ישראל</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="היסטוריה">היסטוריה</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="עזרא ונחמיה">עזרא ונחמיה</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="ערביי ישראל">ערביי ישראל</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="ריבונות">ריבונות</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="יהודה ושומרון">יהודה ושומרון</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="מנחם בגין">מנחם בגין</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="אנואר סאדאת">אנואר סאדאת</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="משה דיין" >משה דיין</a>&nbsp;&nbsp;|&nbsp;&nbsp; 
                    <a href="הצופה">הצופה</a>&nbsp;&nbsp;|&nbsp;&nbsp; 
                    <a href="1977" >1977</a>
                </ul>
            </div>
            <br/>
          </div>
        )
      }
    }
 
      
export default Lecture331;