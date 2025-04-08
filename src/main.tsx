import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './Threads.css'
import TestThreads from './Threads.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TestThreads />
  </StrictMode>,
)
