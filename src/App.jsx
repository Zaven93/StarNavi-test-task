import { useState, useEffect } from 'react'
import useAxios from './hooks/useAxios'
import { transformString } from './utils/helper'
import GameCanvas from './components/GameCanvas'
import History from './components/History'
import './App.css'

function App() {
    const [mode, setMode] = useState('')
    const [settledMode, setSettledMode] = useState('')
    const [cellData, setCellData] = useState([])
    const { fetchData, response } = useAxios()

    const handleChange = (e) => setMode(e.target.value)
    const handleMode = () => {
        setSettledMode(mode)
        setCellData([])
    }

    useEffect(() => {
        fetchData('http://demo1030918.mockable.io/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }, [fetchData])

    return (
        <div className='App'>
            <div className='select-mode'>
                {response && (
                    <>
                        <select defaultValue='Pick mode' onChange={handleChange}>
                            <option disabled hidden>
                                Pick mode
                            </option>
                            {Object.keys(response).map((key) => (
                                <option key={key} value={response[key].field}>
                                    {transformString(key)}
                                </option>
                            ))}
                        </select>
                        <button onClick={handleMode}>Start</button>
                    </>
                )}
                <GameCanvas cellData={cellData} setCellData={setCellData} quantity={settledMode} />
            </div>
            <History quantity={settledMode} history={cellData} />
        </div>
    )
}

export default App
