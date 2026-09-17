
import Searchbar from "../components/Searchbar";
import Listingcard from "../components/Listingcard";
import Filterbar from "../components/Filterbar";

function Marketplace() {
    return (
        <div className="marketplace-section">

            <h1>Marketplace</h1>

            <p>
                Find fresh agricultural products from local farmers.
            </p>

            <Searchbar />

            <Filterbar />

            <div className="listings-grid">
                <Listingcard />
                <Listingcard />
                <Listingcard />
            </div>

        </div>
    );
}

export default Marketplace;


