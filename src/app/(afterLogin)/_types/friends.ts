export interface Friend {
  id: number;
  introduction: string;
  name: string;
  gender: string;
  mbti: string;
  volume:number;
  friendType: "A" | "B" | "C" | "D";
}