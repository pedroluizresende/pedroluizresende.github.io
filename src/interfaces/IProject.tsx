import { ITag } from './ITag';

export default interface IProject {
  id?: number;
  title: string;
  categoryID: number;
  description: string;
  image: string;
  link: string;
  tags: ITag[];
  repository: string;
  mainProject: boolean;
}
