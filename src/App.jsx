import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Tabs } from "@chakra-ui/react"
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"


function App() {

    return (
      <Tabs.Root defaultValue="members">
        <Tabs.List>
          <Tabs.Trigger value="members">
            <LuUser />
            Members
          </Tabs.Trigger>
          <Tabs.Trigger value="projects">
            <LuFolder />
            Projects
          </Tabs.Trigger>
          <Tabs.Trigger value="tasks">
            <LuSquareCheck />
            Settings
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="members">Manage your team members</Tabs.Content>
        <Tabs.Content value="projects">Manage your projects</Tabs.Content>
        <Tabs.Content value="tasks">
          Manage your tasks for freelancers
        </Tabs.Content>
      </Tabs.Root>
    )
  

  
}

export default App
