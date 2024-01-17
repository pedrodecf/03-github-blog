import { SearchBarContainer } from './styles'
import * as Label from '@radix-ui/react-label'

export function SearchBar() {
  return (
    <SearchBarContainer>
      <Label.Root>
        <div className="labelContainer">
          <Label.Label htmlFor="search">Publicações</Label.Label>
          <span>6 publicações</span>
        </div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Buscar conteúdo"
        />
      </Label.Root>
    </SearchBarContainer>
  )
}
