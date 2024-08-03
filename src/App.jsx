import React from 'react'
import Form from '../components/UseReducerForm'
import UseCallbak from '../components/useCallback/UseCallback'
import UseMemo from '../components/useMemo/UseMemo'
import ReactMemo from '../components/ReactMemo/ReactMemo'

const App = () => {
  return (
    <main className='container mx-auto p-2'>
      {/* reducer function  */}
      {/* <Form /> */}

      {/* usecallback  */}
      {/* <UseCallbak /> */}

      {/* useMemo  */}
      {/* <UseMemo /> */}

      {/* react.memo */}
      <ReactMemo />
    </main>
  )
}

export default App