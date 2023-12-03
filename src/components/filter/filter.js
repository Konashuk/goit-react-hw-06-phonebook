import { useDispatch, useSelector } from 'react-redux';
import { LabelFilter, InputFilter } from './filter.styled';
import { filters } from 'redux/store';
// import { useEffect } from 'react';

export const Filter = () => {
  const dataContacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const updateFilter = value => {
    const visibleContacts = dataContacts.filter(item => {
      return item.value.name.toLowerCase().includes(value.toLowerCase());
    });
    dispatch(filters(visibleContacts));
  };

  // const localData = () => {
  //   const persistedStateJSON = localStorage.getItem(`persist:contacts`);
  //   const persistedState = JSON.parse(persistedStateJSON);
  //   return persistedState.contacts;
  // };
  // console.log(localData());

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(dataContacts));
  // }, [dataContacts]);

  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        // value={visibleContacts}
        onChange={ev => updateFilter(ev.target.value)}
      ></InputFilter>
    </LabelFilter>
  );
};
