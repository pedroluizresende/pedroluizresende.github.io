import { useEffect, useState } from 'react';
import { ICategorie } from '../../interfaces/ICategorie';
import { ITag } from '../../interfaces/ITag';

type AutocompleteProps = {
  name: string;
  placeHolder: string;
  key: string;
  setValue: (value: string) => void;
  value: string;
  data: ICategorie[] | ITag[];
  type: 'tags' | 'categories';
  selectTags: string[];
  setSelectTags: (value: string[]) => void;
};

function Autocomplete({
  name, placeHolder, key, setValue, value, data, type = 'categories',
  selectTags, setSelectTags,
}: AutocompleteProps) {
  const [notExist, setNotExist] = useState(false);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const addCategory = (option: string) => {
    setValue(option);
  };

  const handleChangeTag = (option: string) => {
    if (!option) {
      setSelectTags([...selectTags, value]);
    }
    setSelectTags([...selectTags, option]);
    setValue('');
  };

  const filteredOptions = data.filter((item) => item.name
    .toLowerCase().includes(value.toLowerCase()));

  useEffect(() => {
    const findData = data.find((item) => item.name === value);

    if (!findData && value.length > 0) {
      setNotExist(true);
    } else {
      setNotExist(false);
    }
  }, [value]);

  const valueEqual = data.some((item) => item.name.toLowerCase() === value.toLowerCase());

  if (type === 'categories') {
    return (
      <label
        htmlFor={ name }
      >
        <input
          id={ name }
          type="text"
          name={ name }
          onChange={ handleChange }
          placeholder={ placeHolder }
          aria-labelledby={ `${name}-label` }
          value={ value }
          key={ key }
        />
        {
        (value.length > 0 && !valueEqual) && (
          <ul>
            {filteredOptions.map((option, index) => (
              <button
                onClick={ () => addCategory(option.name) }
                key={ `${option}-${index}` }
              >
                {option.name}
              </button>
            ))}
          </ul>
        )
      }
      </label>
    );
  }

  return (
    <label
      htmlFor={ name }
    >
      <input
        id={ name }
        type="text"
        name={ name }
        onChange={ handleChange }
        placeholder={ placeHolder }
        aria-labelledby={ `${name}-label` }
        key={ key }
      />
      {
        notExist && (
          <button
            onClick={ () => handleChangeTag('') }
          >
            Adicionar
          </button>
        )
      }
      {
        value.length > 0 && (
          <ul>
            {filteredOptions.map((option, index) => (
              <button
                onClick={ () => handleChangeTag(option.name) }
                key={ `${option}-${index}` }
              >
                {option.name}
              </button>
            ))}
          </ul>
        )
      }
      {
        selectTags.length > 0 && (
          <p>
            {
              selectTags.join('; ')
            }
          </p>
        )
      }
    </label>
  );
}

export default Autocomplete;
