// @flow
import type { ComponentType } from 'react';

const getDisplayName = (WrappedComponent: ComponentType<*>): string =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

export default getDisplayName;
