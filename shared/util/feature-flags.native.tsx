import type {FeatureFlags} from './feature-flags'
import {featureFlagsOverride} from '@/local-debug.native'

const features = featureFlagsOverride.split(',')

const featureOn = (key: keyof FeatureFlags) => features.includes(key)

const ff: FeatureFlags = {
  admin: __DEV__,
}

// load overrides
Object.keys(ff).forEach(_k => {
  const k: keyof FeatureFlags = _k as any
  ff[k] = featureOn(k as keyof FeatureFlags) || ff[k] || false
})

if (__DEV__) {
  console.log('Features', ff)
}

export default ff
