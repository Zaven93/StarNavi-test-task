import React from 'react'

const History = ({ history, quantity }) => {
    return (
        <div className='history-container'>
            {quantity && (
                <>
                    <h1 className='history-container__header'>History</h1>
                    {history.length > 0 && (
                        <ul>
                            {history.map((item, index) => (
                                <li key={index}>
                                    row {item.row} col {item.col}
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>
    )
}

export default History
