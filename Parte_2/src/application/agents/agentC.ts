import { Media } from "../../domain/models/media";

export class AgentC implements Media {
  calculate(list: number[]): number {
    // Implementar la lógica para la mediana
    const sortedList = [...list].sort((a, b) => a - b);
    const middle = Math.floor(sortedList.length / 2);

    if (sortedList.length % 2 === 0) {
      return (sortedList[middle - 1] + sortedList[middle]) / 2;
    } else {
      return sortedList[middle];
    }
  }
}