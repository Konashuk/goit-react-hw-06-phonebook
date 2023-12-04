import { useDispatch } from 'react-redux';
import { LabelFilter, InputFilter } from './filter.styled';
import { filters } from 'redux/contactsSlise';

export const Filter = () => {
  const dispatch = useDispatch();

  const updateFilter = value => {
    dispatch(filters(value));
  };

  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        onChange={ev => updateFilter(ev.target.value)}
      ></InputFilter>
    </LabelFilter>
  );
};
