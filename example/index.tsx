import 'react-app-polyfill/ie11'
import * as Phaser from 'phaser'
import React, { useState, useMemo, useCallback, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Game, Text, Scene, useInputEvent } from 'react-phaser'

const App = () => {
  const [value, setValue] = React.useState('this is a test')

  return (
    <div>
      <input value={value} onChange={e => setValue(e.currentTarget.value)} />
      <Game width={800} height={800}>
        <MainScene text={value} />
      </Game>
    </div>
  )
}

const MainScene = ({ text }: { text: string }) => {
  return (
    <Scene sceneKey="main">
      <>
        <Text x={0} y={0} text={text} style={{ color: 'white' }} />
        <MovingText />
      </>
    </Scene>
  )
}

const MovingText = () => {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  const updatePosition = useCallback((pointer: Phaser.Input.Pointer) => {
    setPointer({ x: pointer.x, y: pointer.y })
  }, [])

  useInputEvent('pointermove', updatePosition)

  return (
    <Text
      x={pointer.x}
      y={pointer.y}
      text={'test'}
      style={{ color: 'white' }}
    />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
