import { ArcadeFrictionProps } from '../types'
import isEqual from 'fast-deep-equal'
import { iterateProps } from '../../../../util/iterateProps'
import { Point } from '../../../types'

/**
 * Applies props for Phaser.Physics.Arcade.Components.Friction
 */
export function applyArcadeFrictionProps<
  T extends Phaser.Physics.Arcade.Components.Friction
>(instance: T, oldProps: ArcadeFrictionProps, newProps: ArcadeFrictionProps) {
  iterateProps(
    getProps(oldProps),
    getProps(newProps),
    (key, newValue, oldValue) => {
      switch (key) {
        case 'friction':
          if (typeof newValue === 'number') {
            instance.setFriction(newValue)
          } else if (!isEqual(newValue, oldValue)) {
            const { x, y } = newValue as Point
            instance.setFriction(x, y)
          }
          break
        case 'frictionX':
          instance.setFrictionX(newValue as number)
          break
        case 'frictionY':
          instance.setFrictionY(newValue as number)
          break
      }
    }
  )
}

function getProps(props: ArcadeFrictionProps) {
  const { friction, frictionX, frictionY } = props

  return {
    friction,
    frictionX,
    frictionY,
  }
}
