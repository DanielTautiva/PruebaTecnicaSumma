// escaleraService.ts
import { Escalera } from "../../domain/models/escalera";

export class EscaleraService {
  public static printEscalera(escalera: Escalera): void {
    // Implementación para imprimir la escalera
    console.log(`Escalera de tamaño ${escalera.size} con patrón: \n\n${escalera.pattern}`);
  }
}