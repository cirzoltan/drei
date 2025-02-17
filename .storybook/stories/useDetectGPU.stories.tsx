import * as React from 'react'
import { Vector3 } from 'three'

import { Setup } from '../Setup'

import { useDetectGPU, Text } from '../../src'

export default {
  title: 'Misc/useDetectGPU',
  component: useDetectGPU,
  decorators: [(storyFn) => <Setup cameraPosition={new Vector3(0, 0, 5)}>{storyFn()}</Setup>],
}

function Simple() {
  const GPUTier = useDetectGPU()

  return (
    GPUTier && (
      <Text>
        Tier {GPUTier.tier.toString()} {GPUTier.type}
      </Text>
    )
  )
}

export const DefaultStory = () => (
  <React.Suspense fallback={<Text>Detecting GPU …</Text>}>
    <Simple />
  </React.Suspense>
)
DefaultStory.storyName = 'Default'
