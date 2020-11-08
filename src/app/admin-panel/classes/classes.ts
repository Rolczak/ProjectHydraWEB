export interface Classes {
  id:number,
  teacherId: string,
  unitId: number,
  topic: string,
  place: string,
  date: Date,
  time: number,
  comment: string,
}
export interface ClassesVM{
  id: number,
  teacherId: string,
  teacherName: string,
  topic: string,
  unitId: number,
  unit: string,
  place: string,
  date: Date,
  time: number,
  comment: string
}
