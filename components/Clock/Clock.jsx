import React, {useEffect, useRef} from 'react'
import draw from './drawClock'
import commonStyle from '../../styles/components/common.module.css'
import Style from '../../styles/components/Clock.module.css'


export default function Clock() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const timer = setInterval(() => {
      draw(ctx)
    }, 40)
    return () => {
      clearInterval(timer)
    }
  }, []) 

  return (
    <div className={`${commonStyle.commonBox} ${commonStyle.indexBox} ${commonStyle.commonRight} ${Style.container}`}>
      <canvas 
        ref={canvasRef}
        width={170}
        height={170}
      />
    </div>
  )
}
