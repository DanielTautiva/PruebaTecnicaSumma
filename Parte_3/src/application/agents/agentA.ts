// agentA.ts
import { Escalera } from "../../domain/models/escalera";

export class AgentA {
  public static createStaircase(size: number): Escalera {
    let pattern = "";
    for (let i = 0; i < size; i++) {
      const stairs = "#".repeat(i + 1);
      const spaces = " ".repeat(size - i - 1);
      pattern += spaces + stairs + "\n";
    }

    return new Escalera(size, pattern);
  }
}
