import { AgentC } from '../application/agents/agentC'; 
import { Escalera } from '../domain/models/escalera'; 

describe('AgentC', () => {
  it('should create double-sided pyramidal staircase with correct pattern', () => {
    const size = 4;
    const expectedPattern = [
      '   #',
      '  ###',
      ' #####',
      '#######',
      ' #####',
      '  ###',
      '   #',
    ].join('\n');

    const result = AgentC.createDoubleSidedPyramidalStaircase(size);

    expect(result).toBeInstanceOf(Escalera);
    expect(result.pattern.trim()).toEqual(expectedPattern.trim());
  });
});
