import { AgentB } from '../application/agents/agentB';
import { Escalera } from '../domain/models/escalera'; 

describe('AgentB', () => {
  it('should create inverted staircase with correct pattern', () => {
    const size = 4;
    const expectedPattern = [
      '# # # #',
      '  # # #',
      '    # #',
      '      #',
    ].join('\n');

    const result = AgentB.createInvertedStaircase(size);

    expect(result).toBeInstanceOf(Escalera);
    expect(result.pattern).toEqual(expectedPattern);
  });
});
