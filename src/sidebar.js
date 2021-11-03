import bag from "./icons/svg/002-package.svg";
// import coins from "./icons/svg/012-coins.svg";
import computer from "./icons/svg/013-computer.svg";
import money from "./icons/svg/018-money.svg";
import monitor from "./icons/svg/020-monitor.svg";
import hanger from "./icons/svg/022-hanger.svg";
import fruit from "./icons/svg/026-fruit.svg";
import man from "./icons/svg/032-man.svg";
import tools from "./icons/svg/033-tool.svg";
import purse from "./icons/svg/038-purse.svg";
import person from "./icons/svg/042-person.svg";
export const SideBar = () => {
  return (
    <div className="shop-sidebar">
      <ul className="full-sidebar">
        <li>
          <div className="mobile-shop-header-search">
            <input
              datatype="text/numbers"
              type="search/submit"
              id="search-bar"
            ></input>
            <input type="submit" id="search-button"></input>
          </div>
        </li>
        <li>
          <a href="#">Electronic devices</a>
        </li>
        <li>
          <a href="#">Electronic accessories</a>
        </li>
        <li>
          <a href="#">TV and home appliances</a>
        </li>
        <li>
          <a href="#">Health and beauty</a>
        </li>
        <li>
          <a href="#">kids stuff and toys</a>
        </li>
        <li>
          <a href="#">home and life style</a>
        </li>
        <li>
          <a href="#">men's fashion</a>
        </li>
        <li>
          <a href="#">women's fashion</a>
        </li>
        <li>
          <a href="#">sports and outdoor</a>
        </li>
        <li>
          <a href="#">automotion and bikes</a>
        </li>
        <li>
          <a href="#">watches and bags</a>
        </li>
      </ul>
      <ul className="mobile-sidebar">
        <li>
          <a href="#">
            <img src={bag}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={computer}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={money}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={monitor}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={hanger}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={fruit}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={man}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={tools}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={purse}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={person}></img>
          </a>
        </li>
      </ul>
    </div>
  );
};
