import {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from 'react';
import { CatalogContext } from '../../contexts';
import { useLocation } from 'react-router';
import {
  Container,
  Backdrop,
  InputContainer,
  SearchIconContainer,
  Input,
  ClearIconContainer,
  DropdownMenu,
} from './styles';
import { MenuList } from '../';
import { HiOutlineSearch } from 'react-icons/hi';
import { MdClear } from 'react-icons/md';
import { AnimatePresence } from 'framer-motion';

export function SearchInput() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [options, setOptions] = useState(null);

  const { catalog } = useContext(CatalogContext);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const shouldMenuBeOpen = !!inputValue && !!options;

  const backdropFramerOptions = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4 },
    exit: { opacity: 0 },
  };

  const dropdownFramerOptions = {
    initial: { opacity: 0, marginTop: 56 },
    animate: { opacity: 1, marginTop: 16 },
    transition: { duration: 0.2 },
    exit: { opacity: 0, marginTop: 56 },
  };

  const clearInputAndOptions = () => {
    setInputValue('');
    setOptions(null);
  };

  const handleClickOutside = useCallback(
    (event) => {
      const dropdownElement = dropdownRef.current;
      const inputElement = inputRef.current;

      if (dropdownElement) {
        const clickInsideDropdown = dropdownElement.contains(event.target);
        const clickInsideInput = inputElement.contains(event.target);
        if (!clickInsideDropdown && shouldMenuBeOpen && !clickInsideInput) {
          clearInputAndOptions();
        }
      }
    },
    [shouldMenuBeOpen]
  );

  useEffect(() => {
    if (!!inputValue) {
      const filter = catalog.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setOptions(filter);
    }
  }, [inputValue, catalog]);

  useEffect(() => {
    setIsMenuOpen(false);
    clearInputAndOptions();
  }, [location]);

  useEffect(() => {
    if (!isMenuOpen && shouldMenuBeOpen) {
      setIsMenuOpen(shouldMenuBeOpen);
    }
    if (isMenuOpen && !shouldMenuBeOpen) setIsMenuOpen(shouldMenuBeOpen);
  }, [shouldMenuBeOpen, isMenuOpen]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  const inputContainerMemo = useMemo(
    () => (
      <InputContainer isFocused={isFocused}>
        <SearchIconContainer>
          <HiOutlineSearch size={22} />
        </SearchIconContainer>
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder='Buscar...'
        />
        {!!inputValue && (
          <ClearIconContainer>
            <MdClear size={22} />
          </ClearIconContainer>
        )}
      </InputContainer>
    ),
    [isFocused, inputValue]
  );

  return (
    <Container>
      <AnimatePresence>
        {isMenuOpen && <Backdrop {...backdropFramerOptions} />}
      </AnimatePresence>

      {inputContainerMemo}

      <AnimatePresence>
        {isMenuOpen && (
          <DropdownMenu ref={dropdownRef} {...dropdownFramerOptions}>
            <MenuList
              options={options.slice(0, 4)}
              totalOptions={options.length}
              searchTerm={inputValue}
            />
          </DropdownMenu>
        )}
      </AnimatePresence>
    </Container>
  );
}
