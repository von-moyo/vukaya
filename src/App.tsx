import { RouterProvider } from 'react-router-dom'
import router from './router/routes'
import { Toaster } from 'sonner'
import { ModalProvider } from './context/modalContext'

const App = () => {
  return (
    <>
      <ModalProvider>
        <RouterProvider router={router} />
        <Toaster richColors className='text-left' position='bottom-center' />
      </ModalProvider>
    </>
  )
}

export default App
