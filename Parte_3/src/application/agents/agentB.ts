// agentB.ts
import { Escalera } from "../../domain/models/escalera";

export class AgentB {
  public static createInvertedStaircase(size: number): Escalera {
    let pattern = "";
    for (let i = 0; i < size; i++) {
      const spaces = " ".repeat(i);
      const stairs = "#".repeat(size - i).trim();
      pattern += spaces + stairs + "\n";
    }

    return new Escalera(size, pattern.trim());
  }
}
