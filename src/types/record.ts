// 생활기록부 파싱 결과 타입

export interface StudentInfo {
  name: string;
  gender: string;
  school: string;
  classInfo: { grade: number; class: number; number: number; teacher: string }[];
}

export interface Attendance {
  grade: number;
  totalDays: number;
  absence: { sick: number; unauthorized: number; other: number };
  late: { sick: number; unauthorized: number; other: number };
  earlyLeave: { sick: number; unauthorized: number; other: number };
}

export interface Award {
  grade: number;
  semester: number;
  name: string;
  rank: string;
  date: string;
  organization: string;
  participants: string;
}

export interface CreativeActivity {
  grade: number;
  area: "자율활동" | "동아리활동" | "봉사활동" | "진로활동";
  hours: number;
  description: string;
}

export interface SubjectGrade {
  grade: number;
  semester: number;
  subject: string;
  category: string;
  credits: number;
  score: string; // "원점수/과목평균(표준편차)"
  achievement: string; // 성취도(수강자수)
  rank: number | null; // 석차등급
}

export interface SubjectDetail {
  grade: number;
  semester: number;
  subject: string;
  content: string; // 세부능력 및 특기사항 텍스트
}

export interface ReadingActivity {
  grade: number;
  subject: string;
  books: string;
}

export interface BehaviorRecord {
  grade: number;
  content: string;
}

export interface VolunteerActivity {
  grade: number;
  period: string;
  organization: string;
  activity: string;
  hours: number;
  totalHours: number;
}

export interface ParsedRecord {
  studentInfo: StudentInfo;
  attendance: Attendance[];
  awards: Award[];
  creativeActivities: CreativeActivity[];
  subjectGrades: SubjectGrade[];
  subjectDetails: SubjectDetail[];
  readingActivities: ReadingActivity[];
  behaviorRecords: BehaviorRecord[];
  volunteerActivities: VolunteerActivity[];
  rawText: string;
  parseConfidence: number; // 0~1
}

// 분석 결과 타입 (피드백 PDF 구조 기반)

export interface UniversityRecommendation {
  tier: "상향" | "적정" | "안정" | "안전";
  university: string;
  major: string;
  averageRank: string;
  features: string;
  strategy: string;
}

export interface StrengthAnalysis {
  title: string;
  description: string;
  evidence: string[];
}

export interface WeaknessAnalysis {
  title: string;
  description: string;
  suggestions: string[];
}

export interface MajorRecommendation {
  rank: number;
  major: string;
  fitReason: string;
  strengths: string[];
}

export interface InterviewStory {
  title: string;
  description: string;
  keyPoints: string[];
}

export interface SubjectStrategy {
  subject: string;
  direction: string;
  goodPhrases: string[];
}

export interface AnalysisResult {
  id: string;
  studentName: string;
  createdAt: string;
  status: "uploading" | "parsing" | "analyzing" | "completed" | "failed";
  error?: string;

  // 전체 진단
  overallDiagnosis: string;

  // 수시 포트폴리오
  universityRecommendations: UniversityRecommendation[];

  // 강점 분석
  strengths: StrengthAnalysis[];

  // 약점 및 보완 포인트
  weaknesses: WeaknessAnalysis[];

  // 지원 가능 학과
  majorRecommendations: MajorRecommendation[];

  // 면접 핵심 스토리
  interviewStories: InterviewStory[];

  // 3학년 보강 전략
  improvementPlan: string;

  // 세특 보강 전략
  subjectStrategies: SubjectStrategy[];

  // 행특 보강 전략
  behaviorStrategy: string;

  // 추천 활동
  recommendedActivities: string[];

  // 학부모 최종 판단
  finalAssessment: string;

  // 전략 포인트 요약
  strategyPoints: string;
}
