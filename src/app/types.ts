type Info = {
  id: string;
  time: string;
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

type Today = {
  name: string;
  time: number;
}[];

type Classes = {
  name: string;
  id: string;
  nbCompetencies: string;
}[];

export type { Info, Grades, UserInfo, InfoImg, GradeCompetency, GradeExam, Classes, Today };
