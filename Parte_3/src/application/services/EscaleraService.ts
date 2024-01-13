import { Escalera } from "../../domain/models/escalera";

export class EscaleraService {
  public static printEscalera(escalera: Escalera): void {
    // Implementación para imprimir la escalera
    console.log(`${escalera.pattern}`);
  }
}