import { useContext } from 'react'
import { SearchBarContainer } from './styles'
import * as Label from '@radix-ui/react-label'
import { PostContext } from '../../context/PostContext'

export function SearchBar() {
  const { SearchPost, search, posts } = useContext(PostContext)
  return (
    <SearchBarContainer>
      <Label.Root>
        <div className="labelContainer">
          <Label.Label htmlFor="search">Publicações</Label.Label>
          <span>
            {Object.keys(posts).length === 0
              ? 'Carregando'
              : `${posts.length} ${posts.length === 1 ? 'publicação' : 'publicações'}`}
          </span>
        </div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Buscar conteúdo"
          value={search}
          onChange={(e) => SearchPost(e.target.value)}
        />
      </Label.Root>
    </SearchBarContainer>
  )
}
