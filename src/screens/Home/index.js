import React from 'react'
import { HomeList, Hero, ScreenScrollContainer } from '~/components'

const FAKE_DATA_CHARACTERES = [
  {
    id: 0,
    image_url:
      'https://disneyplusbrasil.com.br/wp-content/uploads/2021/06/Darth-Vader-serie-Disney-Plus.jpg',
    title: 'Darth Vader',
    type: 'Personagem',
    subtitle: 'Anakin Skywalker',
    description:
      'Anakin Skywalker foi um lendário Força-sensível humano macho que era um Cavaleiro Jedi da República Galáctica ea profetizado Escolhido da Ordem Jedi , destinado a trazer equilíbrio para a Força . Também conhecido como " Ani " durante sua infância, Skywalker ganhou o apelido de " Hero With No Fear " por suas realizações nas Guerras Clônicas . Seu alter ego, Darth Vader , o Lorde das Trevas dos Sith , foi criado quando Skywalker se voltou para o lado negro da Força , jurando fidelidade aosSith Lord Darth Sidious no final da Era da República .',
  },
  {
    id: 1,
    image_url:
      'https://s2.glbimg.com/oGOP1N5kCTMEZa35A7OE1zNZsiA=/e.glbimg.com/og/ed/f/original/2020/01/08/baby-yoda.jpg',
  },
  {
    id: 2,
    image_url: 'https://m.media-amazon.com/images/I/91iETiJtF-L._AC_SX425_.jpg',
  },
  {
    id: 3,
    image_url:
      'https://conteudo.imguol.com.br/c/entretenimento/66/2017/05/05/palpatine-1494028163081_v2_450x337.jpg',
  },
]

export function Home() {
  return (
    <ScreenScrollContainer>
      <Hero
        item={{
          title: 'Episódio I',
          subtitle: 'A Ameaça Fantasma',
          type: 'Filme',
          image_url:
            'https://img.elo7.com.br/product/zoom/2C25A3B/big-poster-filme-star-wars-a-ameaca-fantasma-lo01-90x60-cm-poster-de-filme.jpg',
        }}
      />
      <HomeList data={FAKE_DATA_CHARACTERES} title="Personagens" />
      <HomeList data={FAKE_DATA_CHARACTERES} title="Filmes" />
      <HomeList data={FAKE_DATA_CHARACTERES} title="Curiosidades" />
    </ScreenScrollContainer>
  )
}
