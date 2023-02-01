import axios from "axios"

export const fetcher = async (path: string, option: object) => {
  const res = await axios.get(path, option)
  return {
    body: res.data,
    status: res.status,
    statusTest: res.statusText
  } 
}