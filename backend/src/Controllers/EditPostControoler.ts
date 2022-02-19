import { Request, Response } from 'express';
import { EditPostService } from '../Services/EditPostService';

export class EditPostController {
  constructor(private EditPostService: EditPostService) {}

  async editpost(req: Request, res: Response): Promise<Response> {
    const post = req.body;
    try {
      const newPost = await this.EditPostService.handle(post);

      return res.status(200).json({ ...newPost, succees: 'Post Edited' });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
