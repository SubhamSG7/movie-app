

const DropDown = ({ setSort, sort }) => {
    function handleGenre(e) {
        setSort({ ...sort, genre: e.target.value })
    }
    function handleOrder(e) {
        setSort({ ...sort, order: e.target.value })
    }
    return (
        <>
            <div>
                <select name="genre" defaultValue={sort.genre} onChange={handleGenre}>
                    <option value="" disabled selected>Select Genre</option>
                    <option value="28">Action</option>
                    <option value="12">Adventure</option>
                    <option value="16">Animation</option>
                    <option value="35">Comedy</option>
                    <option value="99">Documentary</option>
                    <option value="18">Drama</option>
                    <option value="10751">Family</option>
                    <option value="14">Fantasy</option>
                </select>
                <select name="order" defaultValue={sort.order} onChange={handleOrder}>
                    <option value="" disabled selected>Sort By</option>
                    <option value="popularity.desc">Popularity Descending</option>
                    <option value="popularity.asc">Popularity Ascending</option>
                    <option value="vote_average.desc">Rating Descending</option>
                    <option value="vote_average.asc">Rating Ascending</option>
                    <option value="primary_release_date.desc">release_date descending</option>
                    <option value="primary_release_date.asc">release_date ascending</option>
                    <option value="original_title.asc">title(a-z)</option>
                </select>
            </div>
        </>
    )
}

export default DropDown
