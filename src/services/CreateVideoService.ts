import { getRepository } from 'typeorm';
import { Video } from './../entities/Video';
import { Category } from './../entities/Category';

type VideoRequest = {
  name: string;
  description: string;
  duration: number;
  category_id: string;
}

export class CreateVideoService {
  async execute({ name, description, duration, category_id }:VideoRequest ): Promise<VideoRequest | Error> {
    const repo = getRepository(Video);
    const repoCategory = getRepository(Category);

    // SELECT * FROM CATEGORIES WHERE NAME = "NAME" LIMIT 1
    if (!(await repoCategory.findOne(category_id))) {
      return new Error("Category already exists");
    }

    const video = repo.create({
      name,
      description,
      duration,
      category_id,
    })

    await repo.save(video);
    
    return video;
  }
}