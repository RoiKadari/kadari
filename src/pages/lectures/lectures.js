import "./lectures.css";
import React, { Component, createRef } from 'react'
import PrismaZoom from 'react-prismazoom';
import text from '../../text/img.jpg';


class Lectures extends Component {
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
          <div className="App">
            
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
                    <a href="תגית">תגית</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="תגית">תגית</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="תגית">תגית</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="תגית">תגית</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="תגית" >תגית</a> 
                </ul>
            </div>
            <br/>
          </div>
        )
      }
    }
 
      
export default Lectures;