// src/application/usecases/getMediaUseCase.ts

import { MediaService } from "../services/mediaService";

export class GetMediaUseCase {
  private mediaService: MediaService;

  constructor(mediaService: MediaService) {
    this.mediaService = mediaService;
  }

  execute(list: number[]): number {
    return this.mediaService.getMedia(list);
  }
}
