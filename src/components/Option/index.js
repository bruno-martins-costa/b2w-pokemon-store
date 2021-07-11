import { capitalizeString, formatCurrency } from '../../utils';
import { Name } from '../Product/styles';
import {
  OptionLink,
  OptionAvatarContainer,
  OptionAvatar,
  OptionInfo,
  OptionPrice,
} from './styles';

export function Option({ option, type }) {
  const { name, sprites: image, weight: price } = option;

  return (
    <OptionLink to={{ pathname: `/store/${type}/pokemon/${name}` }}>
      <OptionAvatarContainer>
        <OptionAvatar src={image.other['official-artwork'].front_default} />
      </OptionAvatarContainer>

      <OptionInfo>
        <Name>{capitalizeString(name)}</Name>
        <OptionPrice>{formatCurrency(price)}</OptionPrice>
      </OptionInfo>
    </OptionLink>
  );
}
