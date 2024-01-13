// getEscaleraUseCase.ts
import { AgentA } from "../agents/agentA";
import { AgentB } from "../agents/agentB";
import { AgentC } from "../agents/agentC";
import { Escalera } from "../../domain/models/escalera";
import { EscaleraService } from "../services/EscaleraService";

export class GetEscaleraUseCase {
  public static execute(agentType: string, size: number): void {
    let escalera: Escalera;

    switch (agentType) {
      case "A":
        escalera = AgentA.createStaircase(size);
        break;
      case "B":
        escalera = AgentB.createInvertedStaircase(size);
        break;
      case "C":
        escalera = AgentC.createDoubleSidedPyramidalStaircase(size);
        break;
      default:
        throw new Error("Tipo de agente no válido");
    }

    EscaleraService.printEscalera(escalera);
  }
}
