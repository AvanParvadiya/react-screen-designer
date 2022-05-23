const ALERT_COMPONENTS: (ComponentType | MetaComponentType)[] = [

]

export const COMPONENTS: (ComponentType | MetaComponentType)[] = [

  'Text',
  'Textarea',
  'NumberInput',
  'Input',
  'InputGroup',
  'InputLeftAddon',
  'Flex',

  'InputGroupMeta',

]

export const AccordionWhitelist: (
  | ComponentType
  | MetaComponentType
)[] = COMPONENTS.filter(name => !ALERT_COMPONENTS.includes(name))

export const rootComponents = COMPONENTS
  // Remove specific components
  .filter(
    name =>
      ![

      ].includes(name),
  )
