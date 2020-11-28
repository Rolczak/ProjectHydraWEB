export interface Grades {
  id: number,
  userId: number,
  gradeNumber: number,
  lessonId: number
  comment: string
}
export interface GradesVM{
  id: number,
  userId: number,
  gradeNumber: number,
  lessonId: number,
  lessonName: string,
  comment: string
}
