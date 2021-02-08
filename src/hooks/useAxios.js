import { useState } from 'react'
import axios from 'axios'

const useAxios = () => {
    const [response, setResponse] = useState(null)

    const fetchData = async (url, options) => {
        try {
            const { data } = await axios(url, options)

            setResponse(data)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        fetchData,
        response
    }
}

export default useAxios
