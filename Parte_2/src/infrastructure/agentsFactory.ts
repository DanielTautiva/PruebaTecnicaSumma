import { Media } from "../domain/models/media";
import { AgentA } from "../application/agents/agentA";
import { AgentB } from "../application/agents/agentB";
import { AgentC } from "../application/agents/agentC";

export enum AgentType {
  A = "A",
  B = "B",
  C = "C",
}

export class AgentsFactory {
  createAgent(type: AgentType): Media {
    switch (type) {
      case AgentType.A:
        return new AgentA();
      case AgentType.B:
        return new AgentB();
      case AgentType.C:
        return new AgentC();
      default:
        throw new Error("Invalid agent type");
    }
  }
}