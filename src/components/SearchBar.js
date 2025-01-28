function SearchBar({ setSearchString }) {
  const handleChangeSearch = (event) => {
    const {
      target: { value },
    } = event;

    setSearchString(value.toLowerCase());
  };
  return (
    <input type="text" placeholder="Search..." onChange={handleChangeSearch} />
  );
}

export default SearchBar;
