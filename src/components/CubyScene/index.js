import React, { useState, useEffect } from 'react';
import './cuby.css';

function CubyScene() {

    const [slideX, setSlideX] = useState({x: -20});
    const [slideY, setSlideY] = useState({y: -20});
    const [audio, setAudio] = useState({src: '', open: false});
    const [wired, setWired] = useState({bool: false, persp: false});
    const [mDown, setmDown] = useState({down: false, posX: '', posY: ''});
    const [cliX, setcliX] = useState({x: 0});
    const [cliY, setcliY] = useState({y: 0});

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
            setAudio({src: file, open: false});
        }
    };

    const handleAudioOpen = () => {
        if (!audio.open) {
            setAudio({open: true});
        } else {
            setAudio({open: false});
        };
    };

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    const handleWired = () => {
        setWired({bool: !wired.bool});
    };

    const handleWiredHov = (hovbool) => {
        setWired({bool: wired.bool, hovered: hovbool, persp: wired.persp});
    };

    const setPerspective = () => {
        setWired({bool: wired.bool, persp: !wired.persp});
    };

    const handleMousedown = (e) => {
        setmDown({down: true, posX: e.clientX, posY: e.clientY});
        //x: 450 750 1100, 50 300 550 y
    };

    const handleMouseup = (e) => {
        setmDown({down: false});
    };

    // let planeLeft = (441 + 654) / 2;
    // let planeTop = (76.8 + 504) / 2;

    let prevPx = mDown.posX;
    let prevPxY = mDown.posY;

    const handleMousemove = (e) => {
        if (mDown.down) {
            // console.log(prevPx, prevPxY, e.clientX, e.clientY);
            setcliX((e.clientX < prevPx+5 && e.clientX > prevPx-5) ? {x: cliX.x} : e.clientX > prevPx+10 ? {x: cliX.x+=1} : {x: cliX.x-=1});
            setcliY((e.clientY < prevPxY+5 && e.clientY > prevPxY-5) ? {y: cliY.y} : e.clientY > prevPxY+10 ? {y: cliY.y+=1} : {y: cliY.y-=1});
            prevPx = e.clientX;
            prevPxY = e.clientY;
        };
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMousemove);
        return (() => window.removeEventListener('mousemove', handleMousemove));
    }, []);

    

  return (
      <section className='threeDWrap' onMouseMove={handleMousemove} onMouseDown={handleMousedown} onMouseUp={handleMouseup} style={wired.bool ? {background:'black'} : {}}>

            <div className='wiredHolder' onMouseOver={()=>handleWiredHov(true)} onMouseOut={()=>handleWiredHov(false)} onClick={handleWired} style={wired.bool ? 
                {background: "linear-gradient(to bottom, rgb(209, 152, 152) 50%, yellow 50%) 100%", 
                backgroundSize: '100% 200%', 
                backgroundPosition: `${wired.hovered ? 'top' : 'bottom'}`, 
                color: 'transparent', 
                WebkitBackgroundClip: 'text'} 
                : {}}>
                O
            </div>

        {/* <div className='sliders'>
            <div>
                <input type='range' min='-180' max='180' value={slideX.x} onChange={handleXSlide} step='1' className='slider'></input>
                <p style={wired.bool ? {color: 'white'} : {}}>rotateX {slideX.x} deg</p>
            </div>

            <div>
                <input type='range' min='-180' max='180' value={slideY.y} onChange={handleYSlide} step='1' className='slider'></input>
                <p style={wired.bool ? {color: 'white'} : {}}>rotateY {slideY.y} deg</p>
            </div>
        </div> */}

        <div className={`audioStuffs ${audio.open ? '' : 'hidestuffs'}`}>
            <input id='audioFile' type='file' name='file' accept='audio/*' className='audioFile' onChange={handleAudioInput} />
            <label htmlFor='audioFile' style={wired.bool ? {background: 'yellow', color: 'black'} : {}}>upload an audio file</label>

            <audio controls src={audio.src} type='audio/mp3' autoPlay>
            </audio>
        </div>

        <div className='backText' style={wired.bool ? {zIndex: '50'} : {}}>
            <h1 style={wired.bool ? {color: 'white'} : {}}>A MATTER</h1>
            <h1 style={wired.bool ? {color: 'white'} : {}}>OF</h1>
            <h1 style={wired.bool ? {color: 'yellow'} : {}} onClick={setPerspective}>PERSPECTIVE</h1>
        </div>
{/* 
        <div className='mouseTrack'></div> */}

        <div className='scene' style={{transform: `rotateX(${-cliY.y}deg) rotateY(${cliX.x}deg) scale(1)`}}>
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
                    <div className='cuboid__side'>
                        {wired.bool ?
                        <></>
                        :
                        <>
                            <p>😨 you found me</p>
                            <p>try clicking the speakers on that desk over there</p>
                            <p>or the O button up there ↗</p>
                            <p>also the laptop links to a cool tutorial</p>
                            <p>btw in my actual room, i don't have a view of palm trees</p>
                            <p>or a wonderful prarie</p>
                        </>
                        }
                    </div>
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
                <div className='cuboid laptop laptopupper' onClick={()=>openInNewTab('https://css-tricks.com/css-in-3d-learning-to-think-in-cubes-instead-of-boxes/')} style={ wired.bool ? {border: '1px solid rgb(209, 152, 152)', background: 'transparent'} : {}}>
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