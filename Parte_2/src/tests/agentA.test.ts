import { AgentA } from '../application/agents/agentA';

describe('AgentA', () => {
  it('calculates the average correctly', () => {
    const agent = new AgentA();
    const result = agent.calculate([1, 2, 3, 4, 5]);
    expect(result).toBe(3); // Este valor debe ajustarse según la lógica específica de tu agente
  });

  // Agrega más pruebas según sea necesario
});