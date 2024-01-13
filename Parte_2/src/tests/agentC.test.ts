import { AgentC } from '../application/agents/agentC';

describe('AgentC', () => {
  it('calculates the median correctly for odd-length list', () => {
    const agent = new AgentC();
    const result = agent.calculate([1, 2, 3, 4, 5]);
    expect(result).toBe(3); // Ajusta el valor esperado según tu lógica
  });

  it('calculates the median correctly for even-length list', () => {
    const agent = new AgentC();
    const result = agent.calculate([1, 2, 3, 4, 5, 6]);
    expect(result).toBe(3.5); // Ajusta el valor esperado según tu lógica
  });

  // Agrega más pruebas según sea necesario
});
