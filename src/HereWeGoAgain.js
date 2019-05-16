import React, {useState, useEffect} from 'react'
import {Model} from './Model'
import './HereWeGoAgain.scss'

export default function HereWeGoAgain() {
  return <XXX />  
}

function XXX() {
  const [num, incNum] = useState(0)
  const [loading, setLoading] = useState(false)

  const rloading = () => {
    return loading ? 'loading' : ''
  }

  useEffect(() => inc(1000), [])

  const inc = (nnn) => {
    setLoading(true)
    setTimeout(() => {
      incNum(n => n + (nnn || 1))
      setLoading(false)
    }, 3000)
  }

  return (
    <div>
      <h1>{num}</h1>
      <p><small>{rloading()}</small></p>
      <MaForm />
      <MaButton disabled={loading} handleClick={() => inc()} />
    </div>
  )
}

function MaForm() {
  const [submiting, setSubmiting] = useState(false)
  const [m, setM] = useState(new Model())

  const submit = (m) => {
    setSubmiting(true)

    setTimeout(() => {
      setM(m)
      setSubmiting(false)
    }, 1000)
  }

  const handleChangeX = (e) => {
    m.x = e.target.value
  }

  const handleChangeY = (e) => {
    m.y = e.target.value
  }

  const handleChangeZ = (e) => {
    m.z = e.target.value
  }

  return (
    <div>
      <form>
        <div>
          <label>XXX</label>
          <input type="text" onChange={handleChangeX} />
        </div>

        <div>
          <label>YYY</label>
          <input type="text" onChange={handleChangeY} />
        </div>

        <div>
          <label>ZZZ</label>
          <input type="text" onChange={handleChangeZ} />
        </div>

        <div>
          <button type="button" disabled={submiting} onClick={() => submit(m)}>submit</button>
        </div>
      </form> 

      <div>
        <p>Submiting</p>
        <span>{m.x} - {m.y} - {m.z}</span>
      </div>      
    </div>
  )
}

function MaButton({disabled, handleClick}) {
  return (
      <button type="button" disabled={disabled} onClick={handleClick}>
        <span>{disabled ? 'wait a minute' : 'ok'}</span>
      </button>    
  )
}