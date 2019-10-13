export interface IUserGroup {
  id: number;
  name: string;
  description: string;
  rules: IRule[];
  isDelete: boolean;
  createdAt: string;
  modifiedAt: string;
  createdBy: string;
  modifiedBy: string;
  totalUser?: number;
}

export interface IRule {
  moduleName: string;
  access: any;
}
