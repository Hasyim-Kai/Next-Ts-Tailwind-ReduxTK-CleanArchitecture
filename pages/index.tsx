import type { NextPage } from 'next'
import { toggleAlert, toggleModal } from '../app/GlobalSlice'
import { useAppDispatch } from '../app/store'
import Alert from '../presentation/components/global/Alert'
import DefaultLayout from '../presentation/layout/DefaultLayout'
import ModalLayout from '../presentation/layout/ModalLayout'

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
    
  return <DefaultLayout pageTitle='Healen Home' additionalStyle=''>
    <h1 className='text-2xl'>Healen</h1>
    <button onClick={()=>dispatch(toggleModal())}>Modal</button>
    <button onClick={()=>dispatch(toggleAlert())}>Alert</button>

    <ModalLayout additionalStyle=''>
      <h1>Modal</h1>
    </ModalLayout>
  </DefaultLayout>
}

export default Home
