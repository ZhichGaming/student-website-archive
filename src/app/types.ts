type Info = {
  id: string;
  time: string;
  semester: number;
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

type Grade = {
  name: string;
  units: number;
  competecies: GradeCompetency[];
};

type GradeCompetency = {
  name: string;
  pondration: number;
  exams: GradeExam[];
};

type GradeExam =
  | {
      name: string;
      ponderation: number;
      grade: number;
      average: number;
    }
  | {};

type Today = {
  name: string;
  time: number;
}[];

type Class = {
  name: string;
  id: string;
  nbCompetencies: string;
  competencies: {
    name: string;
    ponderation: number;
  }[];
};

export type { Info, Grade, UserInfo, InfoImg, GradeCompetency, GradeExam, Class, Today };
