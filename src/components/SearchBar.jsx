const SearchBar = (props) => {
    return (
        <div className='sidebar-header'>
            <input
                className='search'
                type='search'
                // value={props.value}
                onChange={(e) => props.setSearchValue(e.target.value)}
                placeholder='search'
            />
        </div>
    )
}

export default SearchBar
