export function getClassname(id: string): string {
  let classes: { [key: string]: string } = {
    FRA: "French",
    ESL: "English",
    EESL: "English",
    ELA: "English",
    ESP: "Spanish",
    EPS: "Edu",
    MAT: "Math",
    FIN: "Finance",
    MON: "Monde",
    DRA: "Drama",
    ECR: "ECR",
    CHI: "Chemistry",
    PHY: "Physics",
    SCT: "Science",
    HQC: "History",
    ORI: "Orientation",
  };

  return classes[id];
}
