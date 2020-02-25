import React, {
  useMemo,
  useImperativeHandle,
  useState,
  useLayoutEffect,
} from 'react'
import { useScene } from '../hooks/useScene'
import { TYPES } from '../reconciler/element'
import { GroupElementProps } from '../reconciler/elements/Group'
import { GroupContext } from '../hooks/useGroup'

const GroupElement = (TYPES.Group as unknown) as React.FC<GroupElementProps>

export type GroupProps = Omit<GroupElementProps, 'instance' | 'scene'>

function Group(props: GroupProps, ref: React.Ref<Phaser.GameObjects.Group>) {
  const scene = useScene()
  const instance = useMemo(() => new Phaser.GameObjects.Group(scene, []), [])
  useImperativeHandle(ref, () => instance)

  // phaser groups don't apply its properties to new children, and the group is created
  // before the children are added, so we need to wait until the children are added before
  // assigning the props
  const [shouldSetProps, setShouldSetProps] = useState(false)
  useLayoutEffect(() => {
    setShouldSetProps(true)
  }, [])

  return (
    <GroupContext.Provider value={instance}>
      <GroupElement
        instance={instance}
        scene={scene}
        {...(shouldSetProps ? props : {})}
      />
    </GroupContext.Provider>
  )
}

export default React.forwardRef(Group)
