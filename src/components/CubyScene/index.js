import React, { useState, useEffect } from 'react';
import './cuby.css';

function CubyScene() {

    const [slideX, setSlideX] = useState({x: -20});
    const [slideY, setSlideY] = useState({y: -20});
    const [wheel, setWheelDir] = useState({direction: ''});
    const [audio, setAudio] = useState({src: '', open: false});

    const handleXSlide = (e) => {
        setSlideX({x: e.target.value});
    };

    const handleYSlide = (e) => {
        setSlideY({y: e.target.value});
    };

    const handleAudioInput = (e) => {
        let files = e.target.files;
        let file = URL.createObjectURL(files[0]);
        setAudio({src: file});
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

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        return () => window.removeEventListener('wheel', handleScroll);
    }, []);

    

  return (
      <section className='threeDWrap'>

        <div className='sliders'>
            <div>
                <input type='range' min='-180' max='180' value={slideX.x} onChange={handleXSlide} step='1' className='slider'></input>
                <p>rotateX {slideX.x} deg</p>
            </div>

            <div>
                <input type='range' min='-180' max='180' value={slideY.y} onChange={handleYSlide} step='1' className='slider'></input>
                <p>rotateY {slideY.y} deg</p>
            </div>
        </div>

        <div className={`audioStuffs ${audio.open ? '' : 'hidestuffs'}`}>
            load an audio file:
            <input id='audioFile' type='file' accept='audio/*' onChange={handleAudioInput} />

            <audio controls src={audio.src} type='audio/mp3' autoPlay>
            </audio>
        </div>

        <div className='scene' style={{transform: `rotateX(${slideY.y}deg) rotateY(${slideX.x}deg)`}}>
            <div className='cuboid fullC'>
                <div className='cuboid__side'></div>
                <div className='cuboid__side'></div>
                <div className='cuboid__side'></div>
                <div className='cuboid__side'></div>
                <div className='cuboid__side'></div>
                <div className='cuboid__side'></div>

                <div className='cuboid innerbed'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid innerbed bedBot'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid bedLeg'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid bedLeg bedLeg2'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid bedLeg bedLeg3'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid bedLeg bedLeg4'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid innerdresser'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid innerdesk innerdesktop'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid innerdesk innerdeskback'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid innerdesk innerdeskback2'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid innerdesk innerdeskback'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid innerdesk innerinnerdesk'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid laptop'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid laptop laptopupper'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid innerdresser2'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid lilcabinet'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid lilcabinet lil2'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid lilcabinet lil3'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid lilcabinet lil4'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid lilcabinet lil5'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid innerdesk2'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid deskLeg'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid deskLeg deskLeg2'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid deskLeg deskLeg3'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid deskLeg deskLeg4'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid innerdresser3'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid window1'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid window2'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid outerwall'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid outerwall2'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

                <div className='cuboid outerfloor'>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>

            </div>
                <div className='cuboid speaker' onClick={handleAudioOpen}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
                <div className='cuboid speaker speaker2' onClick={handleAudioOpen}>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                    <div className='cuboid__side'></div>
                </div>
        </div>
    </section>
  );
}

export default CubyScene;