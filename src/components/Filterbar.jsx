
function Filterbar() {
    return (
        <div className="filterbar">

            <select>
                <option value="">All Categories</option>
                <option value="vegetables">Vegetables</option>
                <option value="fruits">Fruits</option>
                <option value="grains">Grains</option>
            </select>

            <select>
                <option value="">All Locations</option>
                <option value="ratnapura">Ratnapura</option>
                <option value="colombo">Colombo</option>
                <option value="kandy">Kandy</option>
            </select>

        </div>
    );
}

export default Filterbar;

