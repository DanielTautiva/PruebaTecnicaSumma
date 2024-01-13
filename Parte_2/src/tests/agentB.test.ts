import { AgentB } from '../application/agents/agentB';

describe('AgentB', () => {
  it('calculates the harmonic mean correctly', () => {
    const agent = new AgentB();
    const result = agent.calculate([1, 2, 3, 4, 5]);
    expect(result).toBeCloseTo(2.18978, 5); // Ajusta el valor esperado según tu lógica
  });

  // Agrega más pruebas según sea necesario
});
