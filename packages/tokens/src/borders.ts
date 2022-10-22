import {
  BordersHairline,
  BordersThin,
  BordersThick,
  BordersHeavy,
} from '../build/js'

export const borders = {
  hairline: `${BordersHairline.weight}px solid ${BordersHairline.color}`,
  thin: `${BordersThin.weight}px solid ${BordersThin.color}`,
  thick: `${BordersThick.weight}px solid ${BordersThick.color}`,
  heavy: `${BordersHeavy.weight}px solid ${BordersHeavy.color}`,
}
