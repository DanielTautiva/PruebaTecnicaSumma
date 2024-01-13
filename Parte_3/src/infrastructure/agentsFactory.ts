import { GetEscaleraUseCase } from "../application/usecases/getEscaleraUseCase";

export class AgentsFactory {
  public static createAgent(agentType: string, size: number): void {
    GetEscaleraUseCase.execute(agentType, size);
  }
}