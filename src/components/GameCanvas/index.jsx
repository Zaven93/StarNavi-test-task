import React from 'react'

const GameCanvas = ({ cellData, setCellData, quantity }) => {
    return (
        <div className='game-canvas-container'>
            {quantity && (
                <table>
                    {Array.from(Array(parseInt(quantity, 10)).keys()).map((index) => (
                        <tr key={index} id={index}>
                            {Array.from(Array(parseInt(quantity, 10)).keys()).map((index) => (
                                <td
                                    onMouseOver={(e) =>
                                        setCellData(() => {
                                            if (cellData.length >= 5) {
                                                cellData.shift()
                                            }

                                            return [
                                                ...cellData,
                                                {
                                                    row:
                                                        parseInt(e.target.parentElement.id, 10) + 1,
                                                    col: parseInt(e.target.id, 10) + 1
                                                }
                                            ]
                                        })
                                    }
                                    key={index}
                                    id={index}></td>
                            ))}
                        </tr>
                    ))}
                </table>
            )}
        </div>
    )
}

export default GameCanvas
