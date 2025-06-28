"use client"

import { useRef, useState, useEffect } from 'react'

function VideoPlayer({ src, isPlaying }) {
  const vidRef = useRef(null)

  useEffect(() => {
    if (isPlaying) {
      console.log('Calling video.play()');
      vidRef.current.play();
    }

    else {
      vidRef.current.pause()
    }

  }, [isPlaying]) // watch this props)

  return <video height="100px" ref={vidRef} src={src} loop playsInline />;


}

export default function PlayerComponent() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');

  // good practice, seperate logic
  // !!!! GET USED to write function in export defaul!
  function controlPlaying() { // no need params
    setIsPlaying(!isPlaying)

  }

  return (
    <>
      <h5>This is video componenet</h5>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button className={`border px-2 ${isPlaying ? "border-green-500" : "border-red-500"}`} onClick={controlPlaying}> {/*  no need curly bracket */}
        {/* <button onClick={() => setIsPlaying(!isPlaying)}> */}
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/plant.mp4"
      />
    </>
  );


}