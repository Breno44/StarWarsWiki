import { api } from '../api'

export function useGetData() {
  async function getFilms() {
    try {
      const response = await api.get('/films')
      return response.data
    } catch (err) {
      return { err }
    }
  }

  async function getCharacters() {
    try {
      const response = await api.get('/characters')
      return response.data
    } catch (err) {
      return { err }
    }
  }

  const getSearchResult = async (query) => {
    try {
      const response = await api.get(`search?query=${query}`)
      return response.data
    } catch (error) {
      return { error }
    }
  }

  return { getFilms, getCharacters, getSearchResult }
}
