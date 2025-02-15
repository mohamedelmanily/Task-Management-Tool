export interface Project {
  project_id?: number;
  projectName: string;
  projectManagerId: number|null;
  projectManager?: string|null;
  start_date:Date|null;
  end_date:Date|null;
  description:string;
  assignedUsers?:any[];
}
