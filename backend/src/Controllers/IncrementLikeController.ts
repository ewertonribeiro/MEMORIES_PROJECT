import { incrementLikeService } from '../Services/IncrementlikeService';
import { Request, Response } from 'express';
import { Post } from '../Models/MongooseSchemas';

export class IncrementLikeController {
  constructor(private IncrementLikeService: incrementLikeService) {}

  async incrementLike(req: Request, res: Response): Promise<Response> {
    const post = req.body as Post;
    try {
      await this.IncrementLikeService.handle(post);

      return res.status(200).json({ success: 'Like Incremented ' });
    } catch (e: any) {
      return res.status(400).json({ error: e });
    }
  }
}
