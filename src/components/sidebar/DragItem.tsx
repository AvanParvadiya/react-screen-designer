import React from 'react'
import { useDrag } from 'react-dnd'
import { Text, Box } from '@chakra-ui/react'
import { DragHandleIcon } from '@chakra-ui/icons'

const DragItem: React.FC<ComponentItemProps> = ({
  type,
  soon,
  label,
  isMeta,
  isChild,
  rootParentType,
}) => {
  const [, drag] = useDrag({
    item: { id: type, type, isMeta, rootParentType },
  })

  let boxProps: any = {
    cursor: 'no-drop',
    color: 'whiteAlpha.600',
  }

  if (!soon) {
    boxProps = {
      ref: drag,
      color: 'whiteAlpha.800',
      cursor: 'move',
      _hover: {
        ml: -1,
        mr: 1,
        bg: 'teal.100',
        boxShadow: 'sm',
        color: 'teal.800',
      },
    }
  }

  if (isChild) {
    boxProps = { ...boxProps, ml: 4 }
  }

  return (
    <Box
      boxSizing="border-box"
      transition="margin 200ms"
      my={1}
      borderRadius="md"
      p={1}
      display="flex"
      alignItems="center"
      {...boxProps}
    >
      <DragHandleIcon path="" fontSize="xs" mr={2} />
      <Text letterSpacing="wide" fontSize="sm" textTransform="capitalize">
        {label}
      </Text>

    </Box>
  )
}

export default DragItem
