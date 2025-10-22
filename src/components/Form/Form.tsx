import { useState } from 'react'
import './Form.scss'

export const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>('')

  const formSubmit = () => {
    if (text) {
      console.log('forsubmit', text)

      props.createNewToDo(text)
      setText('')
    }
  }

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input value={text} type="text" title="text" onChange={e => setText(e.target.value)} />
          <button type="button" onClick={formSubmit}></button>
        </label>
      </form>
    </div>
  )
}
