import { Container } from './styles';
import { AnimatePresence } from 'framer-motion';

export function Backdrop({ show, onClick }) {
  const framerOptions = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {show && <Container {...framerOptions} onClick={onClick} />}
    </AnimatePresence>
  );
}
