import { Escalera } from "../../domain/models/escalera";

export class AgentC {
  public static createDoubleSidedPyramidalStaircase(size: number): Escalera {
    let pattern = "";

    // Parte superior de la pirámide
    for (let i = 0; i < size; i++) {
      const spacesBefore = " ".repeat(size - i - 1);
      const stairs = "#".repeat(2 * i + 1);
      pattern += spacesBefore + stairs + "\n";
    }

    // Parte inferior invertida de la pirámide
    for (let i = size - 2; i >= 0; i--) {
      const spacesBefore = " ".repeat(size - i - 1);
      const stairs = "#".repeat(2 * i + 1);
      pattern += spacesBefore + stairs + "\n";
    }

    return new Escalera(size, pattern);
  }
}
