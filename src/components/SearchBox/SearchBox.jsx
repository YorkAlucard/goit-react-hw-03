import s from './SearchBox.module.css';

const SearchBox = ({ searchQuery, onSearchChange }) => {
  return (
    <div className={s.searchBox}>
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchQuery}
        onChange={onSearchChange}
        className={s.input}
      />
    </div>
  );
};

export default SearchBox;
