import React, { useState, useEffect } from 'react';
import './cuby.css';

function CubyScene() {

    const [slideX, setSlideX] = useState({x: -20});
    const [slideY, setSlideY] = useState({y: -20});
    const [wheel, setWheelDir] = useState({direction: ''});
    const [audio, setAudio] = useState({src: '', open: false});
    const [wired, setWired] = useState({bool: false});

    const handleXSlide = (e) => {
        setSlideX({x: e.target.value});
    };

    const handleYSlide = (e) => {
        setSlideY({y: e.target.value});
    };

    const handleAudioInput = (e) => {
        let files = e.target.files;
        if (files[0]) {
            let file = URL.createObjectURL(files[0]);
            setAudio({src: file, open: true});
        }
    };

    const handleAudioOpen = () => {
        if (!audio.open) {
            setAudio({open: true});
        } else {
            setAudio({open: false});
        };
    };

    const handleScroll = (e) => {
        if (e.deltaY < 0) {
            setWheelDir({direction: -0.5});
        } else if (e.deltaY > 0) {
            setWheelDir({direction: 0.5});
        }
    };

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    const handleWired = () => {
        setWired({bool: !wired.bool});
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        return () => window.removeEventListener('wheel', handleScroll);
    }, []);

    

  return (
      <section className='threeDWrap' style={wired.bool ? {background:'black'} : {}}>

            <div className='wiredHolder' onClick={handleWired} style={wired.bool ? {color: 'yellow'} : {}}>
                O
            </div>

        <div className='sliders'>
            <div>
                <input type='range' min='-180' max='180' value={slideX.x} onChange={handleXSlide} step='1' className='slider'></input>
                <p style={wired.bool ? {color: 'white'} : {}}>rotateX {slideX.x} deg</p>
            </div>

            <div>
                <input type='range' min='-180' max='180' value={slideY.y} onChange={handleYSlide} step='1' className='slider'></input>
                <p style={wired.bool ? {color: 'white'} : {}}>rotateY {slideY.y} deg</p>
            </div>
        </div>

        <div className={`audioStuffs ${audio.open ? '' : 'hidestuffs'}`}>
            <input id='audioFile' type='file' name='file' accept='audio/*' className='audioFile' onChange={handleAudioInput} />
            <label for='audioFile' style={wired.bool ? {background: 'yellow', color: 'black'} : {}}>upload an audio file</label>

            <audio controls src={audio.src} type='audio/mp3' autoPlay>
            </audio>
        </div>

        <div className='backText' style={wired.bool ? {zIndex: '50'} : {}}>
            <h1 style={wired.bool ? {color: 'white'} : {}}>A MATTER</h1>
            <h1 style={wired.bool ? {color: 'white'} : {}}>OF</h1>
            <h1 style={wired.bool ? {color: 'yellow'} : {}}>PERSPECTIVE</h1>
        </div>

        <div className='scene' style={{transform: `rotateX(${slideY.y}deg) rotateY(${slideX.x}deg) scale(1)`}}>
            <div className='cuboid fullC' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                <div className='cuboid__side' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}></div>
                <div className='cuboid__side'></div>
                <div className='cuboid__side' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}></div>
                <div className='cuboid__side'></div>
                <div className='cuboid__side'></div>
                <div className='cuboid__side' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}></div>

                <div className='cuboid innerbed' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid innerbed bedBot' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid bedLeg' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid bedLeg bedLeg2' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid bedLeg bedLeg3' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid bedLeg bedLeg4' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid innerdresser' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid innerdesk innerdesktop' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid innerdesk innerdeskback' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid innerdesk innerdeskback2' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid innerdesk innerinnerdesk' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid innerdresser2' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid lilcabinet' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid lilcabinet lil2' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid lilcabinet lil3' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid lilcabinet lil4' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid lilcabinet lil5' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid innerdesk2' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid deskLeg' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid deskLeg deskLeg2' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid deskLeg deskLeg3' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid deskLeg deskLeg4' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background:'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid innerdresser3' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background: 'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background: 'transparent'} : {}}></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid window1' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background: 'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background: 'transparent'} : {}}></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid window2' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background: 'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background: 'transparent'} : {}}></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid outerwall' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background: 'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid outerwall2' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background: 'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid outerfloor' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background: 'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

            </div>

                <div className='cuboid laptop' style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background: 'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side' style={!wired.bool ? {} : {background: 'transparent'}}></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid laptop laptopupper' onClick={()=>openInNewTab('https://github.com/briankohnen/2021FunHouse')} style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background: 'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side' style={!wired.bool ? {} : {background: 'transparent'}}></div>
                </div>

                <div className='cuboid speaker' onClick={handleAudioOpen} style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background: 'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side' style={!wired.bool ? {} : {background: 'transparent'}}></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid speaker speaker2' onClick={handleAudioOpen} style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background: 'transparent'} : {}}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side' style={!wired.bool ? {} : {background: 'transparent'}}></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
        </div>
    </section>
  );
}

export default CubyScene;