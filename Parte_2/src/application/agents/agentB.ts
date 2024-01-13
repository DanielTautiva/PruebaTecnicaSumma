import { Media } from "../../domain/models/media";

export class AgentB implements Media {
  calculate(list: number[]): number {
    // Implementar la lógica para la media armónica
    return list.length / list.reduce((acc, val) => acc + 1 / val, 0);
  }
}