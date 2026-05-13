export interface TechStack {
  name: string
  purpose: string
  reason: string
}

export interface ProblemSolving {
  issue: string
  analysis: string
  solution: string
  result: string
}

export interface Retrospective {
  improvements: string
  regrets: string
  future: string
}

export interface Project {
  id: string
  title: string
  shortTitle: string
  category: string
  period: string
  description: string
  role: string
  techStack: TechStack[]
  problemSolving: ProblemSolving
  retrospective: Retrospective
  inProgress?: boolean
}

export const projects: Project[] = [
  {
    id: "kubernetes-monitoring",
    title: "AI 기반 Kubernetes 모니터링 플랫폼",
    shortTitle: "K8s 모니터링 플랫폼",
    category: "AI · MLOps",
    period: "2025.03 ~ 진행 중",
    description: "Kubernetes 클러스터 이상 탐지 및 RAG 기반 LLM 분석 플랫폼. Spring Boot가 수집한 Pod 메트릭을 FastAPI AI 서버가 z-score · Isolation Forest · RAG · LLM으로 정밀 분석 후 티켓을 생성합니다.",
    role: "AI 파트 담당. FastAPI 서버 설계 및 구현, 이상 탐지 파이프라인 구축, RAG 및 LLM 연동.",
    techStack: [
      { name: "FastAPI", purpose: "AI 서버 프레임워크", reason: "비동기 처리와 Swagger 자동 문서화" },
      { name: "Isolation Forest", purpose: "이상 탐지 ML 모델", reason: "정상 데이터만으로 학습 가능한 비지도 이상 탐지" },
      { name: "ChromaDB", purpose: "벡터 데이터베이스", reason: "경량 벡터 DB로 RAG 유사 사례 검색" },
      { name: "GPT-4o-mini", purpose: "LLM 리포트 생성", reason: "비용 효율적 LLM으로 리포트 자동 생성" },
      { name: "Docker + ECR", purpose: "컨테이너 배포", reason: "컨테이너 배포 및 GitHub Actions CI/CD" },
    ],
    problemSolving: {
      issue: "ML 모델 학습 데이터 부족 문제",
      analysis: "초기 배포 시 정상 Pod 데이터가 부족하여 Isolation Forest 모델이 제대로 학습되지 않음",
      solution: "정상 Pod 데이터 200개 이상 누적 후 자동 학습하는 training_store 설계",
      result: "충분한 데이터 축적 후 자동으로 모델이 학습되어 이상 탐지 정확도 향상",
    },
    retrospective: {
      improvements: "z-score · ML · RAG · LLM 4단계 파이프라인 직접 설계 경험",
      regrets: "LLM 응답 지연으로 실시간성 한계",
      future: "스트리밍 응답 도입 및 모델 경량화",
    },
    inProgress: true,
  },
  {
    id: "news-curation",
    title: "AI 기반 뉴스 큐레이션 서비스",
    shortTitle: "뉴스 큐레이션 서비스",
    category: "AI · RAG",
    period: "2024.09 ~ 2024.12",
    description: "Dify + Milvus 기반 RAG 파이프라인으로 사용자 관심사에 맞는 뉴스를 큐레이션하는 AI 서비스",
    role: "RAG 파이프라인 설계 및 Dify 워크플로우 개발 담당",
    techStack: [
      { name: "Dify", purpose: "LLM 워크플로우 플랫폼", reason: "노코드 LLM 워크플로우로 빠른 프로토타이핑" },
      { name: "Milvus", purpose: "벡터 데이터베이스", reason: "대규모 벡터 검색 최적화" },
      { name: "Gemini-2.5-flash", purpose: "LLM 모델", reason: "비용 대비 성능 우수" },
      { name: "RAG", purpose: "검색 증강 생성", reason: "최신 뉴스 실시간 검색으로 환각 현상 감소" },
    ],
    problemSolving: {
      issue: "Dify ELSE 브랜치 로직 버그",
      analysis: "조건 분기 시 ELSE 브랜치가 정상적으로 동작하지 않는 Dify 내부 버그 발견",
      solution: "Question Classifier 노드 도입으로 의도 분류 후 분기 처리",
      result: "안정적인 워크플로우 분기 처리 구현 완료",
    },
    retrospective: {
      improvements: "RAG 파이프라인 전체 설계 및 벡터 DB 연동 경험",
      regrets: "모델 교체 과정에서 시간 소요",
      future: "사용자 피드백 기반 개인화 강화",
    },
  },
  {
    id: "life-satisfaction",
    title: "한국인 삶의 만족도 분석",
    shortTitle: "삶의 만족도 분석",
    category: "Data Analysis",
    period: "2025.11 ~ 2025.12",
    description: "KOWEPS 공공 복지 패널 데이터를 기반으로 한국인의 삶의 만족도에 영향을 미치는 요인을 분석한 프로젝트",
    role: "개인 프로젝트. 데이터 전처리, EDA, ML 모델링 전 과정 수행",
    techStack: [
      { name: "Pandas", purpose: "데이터 전처리", reason: "대용량 복지 패널 데이터 전처리" },
      { name: "seaborn", purpose: "데이터 시각화", reason: "통계 시각화" },
      { name: "scikit-learn", purpose: "ML 모델링", reason: "선형회귀 및 랜덤포레스트 모델 구현" },
    ],
    problemSolving: {
      issue: "단순 EDA의 한계",
      analysis: "기초 통계 분석만으로는 의미 있는 인사이트 도출이 어려움",
      solution: "\"예측 가능한가?\"라는 질문으로 확장해 ML 모델링까지 연결",
      result: "EDA에서 ML 예측까지 이어지는 분석 파이프라인 완성",
    },
    retrospective: {
      improvements: "5개 질문 기반 EDA로 의미 있는 인사이트 도출",
      regrets: "선형회귀 R² 낮음 — 복합 요인으로 단순 모델 한계 확인",
      future: "XGBoost 등 고성능 모델 적용 예정",
    },
  },
]
