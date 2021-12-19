import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../const'


export default function useAbout() {
  const [state, setState] = useState()
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    var cancelHandler = axios.CancelToken.source()
    axios
      .get(`${API_URL}/api-urls/about/`, { cancelToken: cancelHandler.token })
      .then((res) => {
        setState(res.data)
        setHasLoaded(true)
      })
      .catch((err) => {
        if (!axios.isCancel(err)) {
          console.log(err)
        }
      })
    return () => {
      cancelHandler.cancel()
    }
  }, [])

  return { state, hasLoaded }
}
