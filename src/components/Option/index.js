import { capitalizeString, formatCurrency } from '../../utils';
import {
  OptionLink,
  OptionAvatarContainer,
  OptionAvatar,
  OptionInfo,
  OptionName,
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
        <OptionName>{capitalizeString(name)}</OptionName>
        <OptionPrice>{formatCurrency(price)}</OptionPrice>
      </OptionInfo>
    </OptionLink>
  );
}
