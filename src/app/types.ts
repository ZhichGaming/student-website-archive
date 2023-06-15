type Info = {
  id: string;
  info: UserInfo;
  img: InfoImg;
};

type UserInfo = {
  name: string;
  permcode: string;
  group: string;
  enriched: string;
  locker: string;
};

type InfoImg = {
  portrait: string;
  barcode: string;
};

type Grades = {
  name: string;
  units: number;
  competecies: GradeCompetency[];
}[];

type GradeCompetency = {
  name: string;
  pondration: number;
  exams: GradeExam[];
};

type GradeExam = {
  name: string;
  ponderation: number;
  grade: number;
  average: number;
};

export type { Info, Grades, UserInfo, InfoImg, GradeCompetency, GradeExam };
