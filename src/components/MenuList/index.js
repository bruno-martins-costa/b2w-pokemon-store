import { useContext } from 'react';
import { StoresContext } from '../../contexts';
import {
  MenuComponent,
  MenuListHeader,
  PokemonsFound,
  NoResultsMessage,
  MenuListItems,
  MenuListFooter,
  SeeAllResultsLink,
} from './styles';
import { Option } from '../';

export function MenuList({ options, totalOptions, searchTerm }) {
  const { currentStoreType } = useContext(StoresContext);
  const { value: type } = currentStoreType;
  
  return (
    <MenuComponent>
      {!!options.length && (
        <MenuListHeader>
          <PokemonsFound>{`${totalOptions} resultados encontrados`}</PokemonsFound>
        </MenuListHeader>
      )}

      {!options.length && (
        <NoResultsMessage>{`Nenhum Pokémon foi encontrado por "${searchTerm}"`}</NoResultsMessage>
      )}

      <MenuListItems>
        {options.map((option) => (
          <Option key={option.name} option={option} type={type} />
        ))}
      </MenuListItems>
      {!!options.length && (
        <MenuListFooter>
          <SeeAllResultsLink
            to={{
              pathname: `/store/${type}`,
              search: `?name=${searchTerm}`,
            }}
          >
            Ver todos os resultados
          </SeeAllResultsLink>
        </MenuListFooter>
      )}
    </MenuComponent>
  );
}
