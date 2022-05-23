export type MenuItem = {
  children?: MenuItems
  soon?: boolean
  rootParentType?: ComponentType
}

type MenuItems = Partial<
  {
    [k in ComponentType]: MenuItem
  }
>

export const menuItems: MenuItems = {

  Text: {},
  Textarea: {},
  NumberInput: {},
  Input: {},
  InputGroup: {
    rootParentType: 'Input',
    children: {
    },
  },
  Flex: {},
}

export const componentsList: ComponentType[] = [

  'Text',
  'Textarea',
  'NumberInput',
  'Input',
  'InputGroup',
  'InputLeftAddon',
  'InputLeftElement',
  'Flex'

]
