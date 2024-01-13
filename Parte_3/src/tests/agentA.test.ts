import { AgentA } from '../application/agents/agentA'; 
import { Escalera } from '../domain/models/escalera'; 

describe('AgentA', () => {
  it('should create staircase with correct pattern', () => {
    const size = 4;
    const expectedPattern = [
      '   #',
      '  ##',
      ' ###',
      '####',
    ].join('\n');

    const result = AgentA.createStaircase(size);

    expect(result).toBeInstanceOf(Escalera);
    expect(result.pattern).toEqual(expectedPattern);
  });
});
