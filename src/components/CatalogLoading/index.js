import { ExtendedContainer } from './styles';
import {
  Container as ItemContainer,
  Content,
  InfoContainer,
} from '../Product/styles';
import { SkeletonLoading } from '../';

export function CatalogLoading() {
  return (
    <ExtendedContainer>
      {Array.from(Array(25)).map((item, index) => (
        <ItemContainer key={index}>
          <Content>
            <InfoContainer>
              <SkeletonLoading width='100%' height='150px' margin='0 0 8px 0' />
              <SkeletonLoading width='90px' height='20px' margin='0 0 8px 0' />
              <SkeletonLoading
                width='120px'
                height='20px'
                margin='0 0 48px 0'
              />
            </InfoContainer>
          </Content>
        </ItemContainer>
      ))}
    </ExtendedContainer>
  );
}
