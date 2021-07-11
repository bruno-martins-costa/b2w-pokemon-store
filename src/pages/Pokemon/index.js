import { useState, useEffect, useCallback, useContext } from 'react';
import { CartContext } from '../../contexts';
import { Button } from '../../components';
import { getService } from '../../services/getService';
import {
  capitalizeString,
  formatCurrency,
  decimeterToMeter,
  hectogramToKilogram,
} from '../../utils';
import {
  AvatarContainer,
  Avatar,
  Container,
  PokemonContainer,
  PokemonBox,
  InfoBox,
  NameAndPriceContainer,
  Price,
  Name,
  WeightAndHeightContainer,
  Weight,
  Height,
  AddToCartContainer,
  StatsContainer,
  MovesContainer,
  Label,
  MovesList,
  Move,
  StatsBox,
  StatsItem,
  StatName,
  StatValue,
  StatChart,
  Chart,
  ProductInfo,
} from './styles';

export function Pokemon({ match }) {
  const { params } = match;
  const { name: pokemonParam, type } = params;

  const [pokemon, setPokemon] = useState(null);
  const { createItemIntoCartByType } = useContext(CartContext);

  const getPokemonData = useCallback(async () => {
    const data = await getService(`pokemon/${pokemonParam}`);
    setPokemon(data);
  }, [pokemonParam]);

  const framerOptions = (y, duration) => {
    return {
      initial: {
        y: y,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
      },
      transition: {
        duration: duration,
      },
    };
  };

  useEffect(() => {
    getPokemonData();
  }, [pokemonParam, getPokemonData]);

  return (
    <Container>
      <PokemonContainer {...framerOptions(100, 0.3)}>
        <PokemonBox>
          <AvatarContainer>
            <Avatar
              src={pokemon?.sprites.other['official-artwork'].front_default}
            />
          </AvatarContainer>
          <ProductInfo>
            <InfoBox>
              <NameAndPriceContainer>
                <Name>{!!pokemon && capitalizeString(pokemon.name)}</Name>
                <Price>{!!pokemon && formatCurrency(pokemon.weight)}</Price>
              </NameAndPriceContainer>

              <WeightAndHeightContainer>
                <Weight>
                  {!!pokemon && `${hectogramToKilogram(pokemon.weight)}kg`}
                </Weight>
                <Height>
                  {!!pokemon && `${decimeterToMeter(pokemon.height)}m`}
                </Height>
              </WeightAndHeightContainer>
            </InfoBox>

            <AddToCartContainer>
              <Button
                text='Adicionar ao carrinho'
                handleClick={() =>
                  createItemIntoCartByType({
                    name: pokemon.name,
                    price: pokemon.weight,
                    image:
                      pokemon.sprites.other['official-artwork'].front_default,
                    cartType: type,
                  })
                }
              />
            </AddToCartContainer>
          </ProductInfo>
        </PokemonBox>
      </PokemonContainer>

      <StatsContainer {...framerOptions(120, 0.4)}>
        <StatsBox>
          <Label>Lista de Status</Label>
          {!!pokemon &&
            !!pokemon.stats.length &&
            pokemon.stats.map(({ base_stat, stat }, index) => (
              <StatsItem key={`${stat}_${index}`}>
                <StatName>{stat.name}</StatName>
                <StatValue>{base_stat}</StatValue>
                <StatChart>
                  <Chart
                    initial={{ width: 0 }}
                    animate={{ width: `${base_stat / 2.2}%` }}
                    transition={{ duration: 0.5 * index }}
                  />
                </StatChart>
              </StatsItem>
            ))}
        </StatsBox>
      </StatsContainer>

      <MovesContainer {...framerOptions(130, 0.6)}>
        <Label>Lista de habilidades</Label>
        <MovesList>
          {!!pokemon &&
            pokemon.moves.map(({ move }) => (
              <Move key={move.name}>{move.name}</Move>
            ))}
        </MovesList>
      </MovesContainer>
    </Container>
  );
}
