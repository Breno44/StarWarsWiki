import React, { useEffect, useState } from 'react'
import { HomeList, Hero, ScreenScrollContainer, Loader } from '~/components'
import { useGetData } from '~/services/hooks'

export function Home() {
  const { getFilms, getCharacters } = useGetData()
  const [loading, setLoading] = useState(true)
  const [films, setFilms] = useState([])
  const [characters, setCharacters] = useState([])

  async function callGetData() {
    const filmsResponse = await getFilms()
    const charactersResponse = await getCharacters()

    if (!filmsResponse.err && !charactersResponse.err) {
      setFilms(filmsResponse)
      setCharacters(charactersResponse)
      setLoading(false)
    }
  }

  useEffect(() => {
    callGetData()
  }, [])

  if (loading) {
    return (
      <ScreenScrollContainer>
        <Loader />
      </ScreenScrollContainer>
    )
  }

  const number = Math.floor(Math.random() * (films.length - 1) + 1)

  return (
    <ScreenScrollContainer>
      <Hero item={{ ...films[number], type: 'Filme' }} />
      <HomeList data={films} title="Filmes" type="Filme" />
      <HomeList data={characters} title="Personagens" type="Personagem" />
    </ScreenScrollContainer>
  )
}
