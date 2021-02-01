import { ArcadeAngularProps } from '../types'
import { iterateProps } from '../../../../util/iterateProps'

/**
 * Applies props for Phaser.Physics.Arcade.Components.Angular
 */
export function applyArcadeAngularProps<
  T extends Phaser.Physics.Arcade.Components.Angular
>(instance: T, oldProps: ArcadeAngularProps, newProps: ArcadeAngularProps) {
  iterateProps(getProps(oldProps), getProps(newProps), (key, newValue) => {
    switch (key) {
      case 'angularAcceleration':
        instance.setAngularAcceleration(newValue as number)
        break
      case 'angularDrag':
        instance.setAngularDrag(newValue as number)
        break
      case 'angularVelocity':
        instance.setAngularVelocity(newValue as number)
        break
    }
  })
}

function getProps(props: ArcadeAngularProps) {
  const { angularAcceleration, angularDrag, angularVelocity } = props

  return {
    angularAcceleration,
    angularDrag,
    angularVelocity,
  }
}
