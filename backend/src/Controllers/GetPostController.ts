import { Request, Response } from 'express';
import { GetPostsService } from '../Services/GetPostsService';

export class GetPostController {
  constructor(private GetPostsService: GetPostsService) {}

  async getPosts(req: Request, res: Response): Promise<Response> {
    try {
      const posts = await this.GetPostsService.handle();
      return res.status(200).json(posts);
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }
}
