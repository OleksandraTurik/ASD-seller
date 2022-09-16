const stylesForReactSelect = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#002f34' : 'inherit',
    '&:hover': {
      backgroundColor: '#002f34',
      color: 'white',
    },
  }),
  control: () => ({
    fontSize: '16px',
    color: '#002f34',
    backgroundColor: 'rgb(242, 244, 245)',
    border: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    borderImage: 'initial',
    borderBottom: '2px solid rgb(242, 244, 245)',
    borderRadius: '4px',
    lineHeight: '20px',
    outline: '0px',
    padding: '10px 48px 10px 16px',
    width: '2000px',
    maxWidth: '80%',
    display: 'flex',
  }),
  dropdownIndicator: () => ({
    position: 'relative',
    left: '20px',
    top: '2px',
  }),
  menuList: (base) => ({
    ...base,
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'rgb(242, 244, 245)',
    },
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#002f34',
    },
  }),
};

export default stylesForReactSelect;
