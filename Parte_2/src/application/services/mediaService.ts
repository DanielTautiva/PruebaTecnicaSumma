// src/application/services/mediaService.ts

import { Media } from "../../domain/models/media";

export class MediaService {
  private agent: Media;

  constructor(agent: Media) {
    this.agent = agent;
  }

  getMedia(list: number[]): number {
    return this.agent.calculate(list);
  }
}
