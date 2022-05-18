import Toolbar from "./Navigation/Toolbar/Toolbar";

function Layout(props) {
  return (
    <div>
        <Toolbar/>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
