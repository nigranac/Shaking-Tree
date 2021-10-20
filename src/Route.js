import { Container } from "./styled";
import Basket from "./components/Basket";
import Tree from "./components/Tree";

import ShakeButton from "./components/ShakeButton";
// import background from "./assets/image/view.png";

function Route() {
  return (
    <Container>
      <Tree alt="tree" />
      <ShakeButton name="Shake The " />
      <Basket alt="basket" />
    </Container>
  );
}

export default Route;
