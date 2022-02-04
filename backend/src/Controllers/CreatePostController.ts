import { Request, Response } from 'express';
import { Post } from '../Models/MongooseSchemas';
import { CreatePostService } from '../Services/createPostService';

export class CreatePostController {
  constructor(private CreatePostService: CreatePostService) {}

  async createPost(req: Request, res: Response): Promise<Response> {
    const post = req.body as Post;

    try {
      const newPost = await this.CreatePostService.handle(post);

      return res.status(201).json(newPost);
    } catch (e: any) {
      return res.status(400).json({ error: e.message });
    }
  }
}
