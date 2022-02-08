import axios from 'axios';

interface Posts {
  title?: string;
  message?: string;
  creator?: string;
  tags?: string;
  selectedFile?: string | ArrayBuffer | null;
}

class API {
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:5000';
  }

  async getPosts(param: string) {
    try {
      const { data } = await axios.get(`${this.baseUrl}/${param}`);

      return data;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
  async createPost(param: string, post: Posts | null) {
    try {
      const { data } = await axios.post(`${this.baseUrl}/${param}`, post);
      return { data };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async editPost(post: Posts | null) {
    try {
      const { data } = await axios.patch(
        `${this.baseUrl}/posts/editpost`,
        post
      );
      return data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export { API };
