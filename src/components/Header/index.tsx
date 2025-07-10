import HeaderLisItem from "./components/HeaderListItem";
import HeaderList from "./components/HeaderList";
import Logo from "../Logo";
import HeaderLinks from "./components/HeaderLinks";
import HeaderActions from "./components/HeaderActions";

const Header = () => {
  return (
    <header>
      <HeaderList>
        <HeaderLisItem>
          <Logo />
        </HeaderLisItem>

        <HeaderLisItem>
          <HeaderLinks />
        </HeaderLisItem>

        <HeaderLisItem>
          <HeaderLinks />
        </HeaderLisItem>

        <HeaderLisItem>
          <HeaderActions />
        </HeaderLisItem>
      </HeaderList>
    </header>
  );
};

export default Header;
