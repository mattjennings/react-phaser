import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Game, Scene, Text, useScene } from 'react-phaser-fiber'
import { MemoryRouter, Route, Switch, useHistory } from 'react-router'

/**
 * Demonstrates routing between scenes using react-router
 */
const App = () => {
  return (
    <Game width={400} height={400}>
      <MemoryRouter initialEntries={['/scene-a']}>
        <Switch>
          <Route path="/scene-a" exact component={SceneA} />
          <Route path="/scene-b" exact component={SceneB} />
        </Switch>
      </MemoryRouter>
    </Game>
  )
}

const SceneA = () => {
  const history = useHistory()

  return (
    <Scene sceneKey="scene-a">
      <Text
        x={100}
        y={100}
        text="Click to go to Scene B."
        style={{ color: 'white' }}
      />
      <ClickListener onClick={() => history.push('/scene-b')} />
    </Scene>
  )
}

const SceneB = () => {
  const history = useHistory()

  return (
    <Scene sceneKey="scene-b">
      <Text
        x={100}
        y={100}
        text="Click to go to Scene A."
        style={{ color: 'white' }}
      />
      <ClickListener onClick={() => history.push('/scene-a')} />
    </Scene>
  )
}

const ClickListener = ({ onClick }: { onClick: () => any }) => {
  const scene = useScene()

  useEffect(() => {
    scene.input.on('pointerdown', onClick)
  }, [onClick, scene.input])

  return null
}

ReactDOM.render(<App />, document.getElementById('root'))
