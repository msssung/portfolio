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
    shortTitle: "AI 기반 K8s 모니터링 플랫폼",
    category: "AI · MLOps",
    period: "2025.03 ~ 진행 중",
    description: "Kubernetes 클러스터 이상 탐지 및 RAG 기반 LLM 분석 플랫폼. Kubernetes 환경에서 발생하는 복잡한 매트릭, 로그, 클러스터 이벤트를 실시간으로 통합 수집 및 분석하며, RAG구조를 기반으로 한 LLM 분석 계층을 결합하여 장애의 근본 원인을 추론하고 대화형 진단 결과를 제공합니다.",
    role: "AI 파트 담당. FastAPI 서버 설계 및 구현, 이상 탐지 파이프라인 구축, RAG 및 LLM 연동.",
    techStack: [
      { name: "FastAPI", purpose: "AI 서버 프레임워크", reason: "asyncio.gather로 z-score·ML 탐지를 병렬 실행하는 비동기 파이프라인 구현에 적합" },
      { name: "Isolation Forest", purpose: "이상 탐지 ML 모델", reason: "정상 데이터만으로 학습 가능한 비지도 학습 — 레이블 없이 이상 탐지 가능" },
      { name: "ChromaDB", purpose: "벡터 데이터베이스", reason: "HNSW 코사인 유사도 기반 경량 로컬 벡터 DB로 RAG 유사 사례 검색" },
      { name: "GPT-4o-mini", purpose: "LLM 리포트 생성", reason: "JSON 모드 강제·temperature 0.2로 일관된 분석 결과 확보, rule-based fallback 내장" },
      { name: "Docker + ECR", purpose: "컨테이너 배포", reason: "GitHub Actions로 ECR push 후 kind 클러스터까지 자동 배포" },
    ],
    problemSolving: {
      issue: "ML 모델 초기 학습 데이터 부족",
      analysis: "초기 배포 직후 정상 Pod 데이터가 없어 Isolation Forest가 미학습 상태로 ML 탐지가 전혀 작동하지 않음",
      solution: "training_store 설계 — 정상 Pod 데이터를 200개 이상 누적하면 자동 학습하고, MLDetector.reload()로 서버 재시작 없이 새 모델을 핫리로드. 미학습 상태에서는 ML 탐지를 스킵하고 z-score + LLM으로만 분석을 이어감",
      result: "운영 중 데이터가 축적되면 ML 탐지가 자동 활성화되고, /health 엔드포인트의 ml_sample_count·ml_is_trained 필드로 학습 상태를 실시간 확인 가능",
    },
    retrospective: {
      improvements: "z-score·ML·RAG·LLM 4단계 파이프라인을 직접 설계하고 asyncio.gather로 독립적인 탐지 단계를 병렬 처리해 지연을 줄임. 각 단계 결과가 다음 단계의 컨텍스트로 누적되는 구조를 직접 구현한 경험",
      regrets: "LLM 응답까지 포함하면 분석 한 건에 수 초가 소요되어 실시간성에 한계. Spring Boot의 read timeout(10초) 안에 맞춰야 해 타이트한 구조",
      future: "LLM 응답을 SSE 스트리밍으로 전달해 체감 지연을 낮추거나, 정상 데이터가 충분히 쌓인 뒤 ML 단독으로 빠르게 판정하는 경량 모드 추가",
    },
    inProgress: true,
  },
  {
    id: "news-curation",
    title: "AI 기반 뉴스 큐레이션 서비스",
    shortTitle: "AI 기반 기사 큐레이션 서비스",
    category: "AI · RAG",
    period: "2024.09 ~ 2024.12",
    description: "Dify + Milvus 기반 RAG 파이프라인으로 최신 뉴스 검색, 요약, 중요도 생성 등의 기능을 포함하는 AI 서비스",
    role: "RAG 파이프라인 설계 및 Dify 워크플로우 개발 담당",
    techStack: [
      { name: "Dify v1.13.3", purpose: "LLM 워크플로우 플랫폼", reason: "노코드 워크플로우로 빠른 프로토타이핑, LLM·코드·지식검색 노드 통합" },
      { name: "Milvus v2.4.15", purpose: "벡터 데이터베이스", reason: "대규모 벡터 검색 최적화, etcd·MinIO와 Docker Compose로 자체 호스팅" },
      { name: "Gemini 2.5 Pro", purpose: "LLM (스코어링·요약)", reason: "CoT 분석 품질 우수, 긴 기사 배열 처리에 적합한 컨텍스트 길이" },
      { name: "Gemini 2.5 Flash", purpose: "LLM (챗봇)", reason: "실시간 대화 응답에 필요한 낮은 지연시간, 비용 대비 성능 우수" },
      { name: "text-embedding-3-small", purpose: "임베딩 모델", reason: "Knowledge Base 청크 임베딩, score_threshold 0.5 기준 적합" },
      { name: "RAG", purpose: "검색 증강 생성", reason: "최신 뉴스 실시간 검색으로 학습 데이터 한계 극복 및 환각 감소" },
    ],
    problemSolving: {
      issue: "rag_chat 워크플로우에서 지식검색 노드가 ... 상태로 응답 없이 무한 대기. Dify 컨테이너는 전부 Up 상태이고 별다른 에러 메시지도 없어 원인 파악 어려움",
      analysis: "Milvus가 Dify와 별도 docker-compose.yml로 구성되어 있고 restart: always 옵션이 없었던 탓에, 서버 재부팅이나 Docker 재시작 시 Milvus만 자동으로 올라오지 않은 것이 원인. Dify 지식검색 노드는 Milvus에 벡터 검색 요청을 보내는데, Milvus가 내려가 있으면 응답을 받지 못하고 무한 대기 상태가 됨",
      solution: "즉시 해결은 docker compose up -d 로 Milvus 수동 재시작. 재발 방지를 위해 docker-compose.yml의 etcd·minio·standalone 세 서비스 모두에 restart: always 추가",
      result: "이후 서버 재부팅 시에도 Milvus가 자동으로 기동되어 동일 장애 재발 없음",
    },
    retrospective: {
      improvements: "RAG 파이프라인 전체 설계 및 벡터 DB 연동 경험",
      regrets: "검색 정확도 튜닝 및 Prompt Engineering에 많은 시간 소요",
      future: "사용자 관심사 기반 개인화 뉴스 추천 기능 및 Agent 구조 확장 예정",
    },
    inProgress: true,
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
