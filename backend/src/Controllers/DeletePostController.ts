import { Request, Response } from 'express';
import { DeletePostService } from '../Services/DetelePostService';

export class DeletePostController {
  constructor(private Service: DeletePostService) {}

  async deletepost(req: Request, res: Response) {
    const { _id } = req.params;

    try {
      await this.Service.handle(_id);

      return res.status(200).send('Post  Deleted');
    } catch (error: any) {
      return res.status(404).json({ error: error });
    }
  }
}
