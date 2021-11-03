export const Header1 = () => {
  return (
    <div className="shop-header">
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">shop</a>
        </li>
        <li>
          <a href="#">items</a>
        </li>
        <li>
          <a href="#">deals</a>
        </li>
        <li>
          <a href="#">cart</a>
        </li>
      </ul>
      <div className="shop-header-search">
        <input
          datatype="text/numbers"
          type="search/button"
          id="search-bar"
        ></input>
        <input type="submit" id="search-button"></input>
      </div>
    </div>
  );
};
