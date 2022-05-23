import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import { Global } from '@emotion/react'
import Metadata from '~components/Metadata'
import useShortcuts from '~hooks/useShortcuts'
import Header from '~components/Header'
import Sidebar from '~components/sidebar/Sidebar'
import EditorErrorBoundary from '~components/errorBoundaries/EditorErrorBoundary'
import Editor from '~components/editor/Editor'
import { connectToDatabase } from "~utils/couchbase/couchbase";
import { InspectorProvider } from '~contexts/inspector-context'
import Inspector from '~components/inspector/Inspector'
import { Context } from 'next-redux-wrapper'

import absoluteUrl from "next-absolute-url";
import { Props } from 'framer-motion/types/types'

const App = ({ isConnected }: Props) => {
  useShortcuts()

  return (
    <>
      <Global
        styles={() => ({
          html: { minWidth: '860px', backgroundColor: '#1a202c' },
        })}
      />
      <Metadata />
      <Header />
      <DndProvider backend={Backend}>
        <Flex h="calc(100vh - 3rem)">
          <Sidebar />
          <EditorErrorBoundary>
            <Box bg="white" flex={1} position="relative">
              <Editor />
            </Box>
          </EditorErrorBoundary>

          <Box
            maxH="calc(100vh - 3rem)"
            flex="0 0 15rem"
            bg="#f7fafc"
            overflowY="auto"
            overflowX="visible"
            borderLeft="1px solid #cad5de"
          >

          </Box>
        </Flex>
      </DndProvider>
    </>
  )
}

export default App


export async function getServerSideProps() {

  let connection = await connectToDatabase();

  const { cluster, bucket, collection, profileCollection } = connection;

  // Check connection with a KV GET operation for a key that doesnt exist
  let isConnected = false;
  try {
    await profileCollection.get("testingConnectionKey");
  } catch (err: any) {
    // error message will return 'document not found' if and only if we are connected
    // (but this document is not present, we're only trying to test the connection here)
    if (err.message === "document not found") {
      isConnected = true;
    }
    // if the error message is anything OTHER THAN 'document not found', the connection is broken
  }

  // let profile = JSON.parse(JSON.stringify(await getProfileByKey(profileCollection, '1cfaaa82-e63e-4207-addf-f023763d0374')));

  return {
    props: { isConnected },
  };
}
