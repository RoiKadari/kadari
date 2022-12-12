import "./main/lectures.css";
import React, { Component, createRef } from 'react';
import PrismaZoom from 'react-prismazoom';
import storage from '../../firebase';
import { ref, getDownloadURL } from "firebase/storage";
import AddComment, { commentNum } from "../../addComment";
getDownloadURL(ref(storage, '181a.jpg')).then((url) => {
  document.getElementById('181a').setAttribute('src', url);
  })
getDownloadURL(ref(storage, '181b.jpg')).then((url) => {
document.getElementById('181b').setAttribute('src', url);
})
getDownloadURL(ref(storage, '181c.jpg')).then((url) => {
document.getElementById('181c').setAttribute('src', url);
})
getDownloadURL(ref(storage, '181d.jpg')).then((url) => {
document.getElementById('181d').setAttribute('src', url);
})
getDownloadURL(ref(storage, '181e.jpg')).then((url) => {
document.getElementById('181e').setAttribute('src', url);
})

export const keyWords181 = 

[
 
];
 


let KeyWordsFrontEnd = [];
for (let i=0; i<keyWords181.length-1; i++) {
    KeyWordsFrontEnd.push(
        <span key={i}>
            <a href={keyWords181[i]}>{keyWords181[i]}</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
        </span>
    );
};
KeyWordsFrontEnd.push(
    <span key={keyWords181.length-1}>
        <a href={keyWords181[keyWords181.length-1]}>{keyWords181[keyWords181.length-1]}</a>
    </span>
);



class ומי_כעמך_ישראל_גוי_אחד_בארץ extends Component {
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
        commentNum.unshift("181")
        return (
          <div>
            
            <header className="App-header">
              <h1>ומי כעמך ישראל גוי אחד בארץ</h1>
              <h2>הצופה&nbsp;&nbsp;|&nbsp;
              י"ד בתשרי (ערב סוכות) תשל"ט&nbsp;&nbsp;|&nbsp;
              15.10.78</h2>
            </header>

            <section className="App-wrapper">
              <PrismaZoom className="App-zoom" onZoomChange={this.onZoomChange} maxZoom={8} ref={this.prismaZoom}>
                <img src="" alt="" id="181a" className="App-image"/>
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

<br/><br/>

              <section className="App-wrapper">
              <PrismaZoom className="App-zoom" onZoomChange={this.onZoomChange} maxZoom={8} ref={this.prismaZoom}>
                <img src="" alt="" id="181b" className="App-image"/>
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
              
<br/><br/>

<section className="App-wrapper">
<PrismaZoom className="App-zoom" onZoomChange={this.onZoomChange} maxZoom={8} ref={this.prismaZoom}>
  <img src="" alt="" id="181c" className="App-image"/>
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

<br/><br/>

              <section className="App-wrapper">
              <PrismaZoom className="App-zoom" onZoomChange={this.onZoomChange} maxZoom={8} ref={this.prismaZoom}>
                <img src="" alt="" id="181d" className="App-image"/>
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

              <br/><br/>

<section className="App-wrapper">
<PrismaZoom className="App-zoom" onZoomChange={this.onZoomChange} maxZoom={8} ref={this.prismaZoom}>
  <img src="" alt="" id="181e" className="App-image"/>
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
            <AddComment />
          </div>
        )
      }
    }

export default ומי_כעמך_ישראל_גוי_אחד_בארץ;