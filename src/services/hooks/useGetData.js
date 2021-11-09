import { api } from '../api'

export function useGetData() {
  async function getFilms() {
    try {
      const response = await api.get('/films')
      return response.data
    } catch (err) {
      console.log(err)
      return { err }
    }
  }

  async function getCharacters() {
    try {
      const response = await api.get('/characters')
      return response.data
    } catch (err) {
      console.log(err)
      return { err }
    }
  }

  return { getFilms, getCharacters }
}
