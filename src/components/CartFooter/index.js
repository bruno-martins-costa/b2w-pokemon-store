import { useContext } from 'react';
import { ModalContext } from '../../contexts';
import { TotalCart, TotalText, TotalValue, FinishContainer } from './styles';
import { Button } from '../';

export function CartFooter({ totalValue, buttonIsDisabled }) {
  const { toggleIsModalOpen } = useContext(ModalContext);

  return (
    <>
      <TotalCart>
        <TotalText>{`Total`}</TotalText>
        <TotalValue>{totalValue}</TotalValue>
      </TotalCart>

      <FinishContainer>
        <Button
          text='Finalizar compra'
          disabled={buttonIsDisabled}
          handleClick={toggleIsModalOpen}
        />
      </FinishContainer>
    </>
  );
}
