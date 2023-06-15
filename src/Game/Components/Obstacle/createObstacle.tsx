import { ObstacleProvider } from "../../Context"
import Obstacle from "./Obstacle"
interface IcreateObstacle {
  increment: number
}
function createObstacle({ increment }: IcreateObstacle) {

  const ObstacleContainer = () => {
    return (
      <ObstacleProvider startPosition={increment}>
        <Obstacle />
      </ObstacleProvider>
    )
  }

  return ObstacleContainer
}

export default createObstacle