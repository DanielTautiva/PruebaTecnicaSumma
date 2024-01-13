// index.ts

import { AgentsFactory, AgentType } from "./src/infrastructure/agentsFactory";
import { GetMediaUseCase } from "./src/application/usecases/getMediaUseCase";
import { MediaService } from "./src/application/services/mediaService";

const agentsFactory = new AgentsFactory();
const agentType = AgentType.C;
const agent = agentsFactory.createAgent(agentType);

const mediaService = new MediaService(agent);
const getMediaUseCase = new GetMediaUseCase(mediaService);

const dataList = [1, 2, 3, 4, 5];
const result = getMediaUseCase.execute(dataList);

console.log(`Media calculated by Agent ${agentType}: ${result}`);
