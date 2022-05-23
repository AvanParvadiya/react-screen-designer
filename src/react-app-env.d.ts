/// <reference types="react-scripts" />;
declare module 'prettier/standalone'
declare module 'coloreact'
declare module 'browser-nativefs'

type ComponentType =

  | 'Text'
  | 'Textarea'
  | 'NumberInput'
  | 'Input'
  | 'InputGroup'
  | 'InputLeftAddon'
  | 'InputLeftElement'
  | 'Flex'

type MetaComponentType =
  | 'FormControlMeta'
  | 'InputGroupMeta'


interface IComponent {
  children: string[]
  type: ComponentType
  parent: string
  id: string
  props: any
  rootParentType?: ComponentType
  componentName?: string
}

interface IComponents {
  [name: string]: IComponent
}

interface IPreviewProps {
  component: IComponent
}

interface ComponentItemProps {
  id: string
  label: string
  type: ComponentType
  isMoved?: boolean
  isChild?: boolean
  isMeta?: boolean
  soon?: boolean
  rootParentType?: ComponentType
}
