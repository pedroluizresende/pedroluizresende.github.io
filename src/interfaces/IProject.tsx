import { ITag } from './ITag';

export default interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: ITag[];
  repository: string;
  main: boolean;
}
