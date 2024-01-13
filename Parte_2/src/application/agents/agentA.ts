// src/application/agents/agentA.ts

import { Media } from "../../domain/models/media";

export class AgentA implements Media {
  calculate(list: number[]): number {
    // Implementar la lógica para la media aritmética
    return list.reduce((acc, val) => acc + val, 0) / list.length;
  }
}