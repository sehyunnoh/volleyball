# Volleyball Skills Library — 구축 계획

> `D:\workspace\basketball` (Hoops Handbook)를 참고해서 같은 뼈대로 배구 버전을 만드는 계획.
> basketball의 `intent.md`처럼, 이 프로젝트도 착수 전에 `intent.md`를 먼저 확정하는 걸 권장한다.
> 이 문서는 "무엇을 그대로 가져가고, 무엇을 바꿔야 하는가"에 집중한 실행 계획이다.

---

## 1. basketball에서 그대로 가져올 것

구조적으로 이미 검증된 패턴이라 재발명하지 않는다.

| 항목 | 내용 |
|---|---|
| 스택 | Vite + React 19 + TypeScript + Tailwind CSS v4 + vite-plugin-pwa |
| 라우팅 | `HashRouter` — GitHub Pages 하위 경로에서 404 fallback 없이 딥링크·새로고침 대응 |
| 배포 | GitHub Pages, `.github/`의 Actions 워크플로 그대로 재사용 |
| 정보 구조 | `Category → Level(3단계) → Skill` 3단 계층 |
| 데이터 원칙 | 화면 코드는 고정, 콘텐츠 추가는 `src/data/skills/*.ts` 파일 수정만으로 끝나야 함 |
| 컴포넌트 | `Layout`, `SkillCard`, `VideoFacade`(썸네일 파사드 → 탭 시 iframe 삽입), `badges` |
| 페이지 | `Home / Browse / Category / SkillDetail / Search / NotFound` |
| 라이브러리 코드 | `lib/search.ts`(클라이언트 검색), `lib/youtube.ts`, `lib/seo.ts`, `lib/analytics.ts`(GoatCounter, 해시 라우트 카운팅) |
| 디자인 방식 | 시맨틱 컬러 토큰(`--c-ink`, `--c-rule`, `--c-accent` 등)만 사용, 컴포넌트에 `dark:` 변형 없이 미디어 쿼리에서 토큰만 교체 |
| PWA | `manifest`(192/512/maskable 아이콘), 서비스워커 `autoUpdate`, 앱 셸 오프라인 캐시 |
| 성능 | 유튜브 iframe 지연 로딩(파사드 패턴), 이미지 lazy loading, 데이터는 정적 TS — API 호출 없음 |
| 확장 원칙 | 카테고리/필드는 처음부터 전체 스코프를 수용하는 타입으로 설계하고, 콘텐츠만 단계적으로 채운다 |

**주의**: basketball 코드를 복사해서 시작하되, `index.html`의 GoatCounter 사이트 코드, `vite.config.ts`의 `BASE`/`manifest`, `package.json`의 `name`은 반드시 `volleyball`로 교체해야 한다 (README에도 명시된 함정).

---

## 2. 배구에 맞게 새로 설계할 것

### 2.1 카테고리 (9개 초안)

basketball의 9개 카테고리처럼, 배구도 실제 기술 분류를 기준으로 9개를 잡는다.

| # | Category | 포함 내용 | Phase(안) |
|---|---|---|---|
| 1 | **Fundamentals** | 레디 포지션, 기본 풋워크, 볼 컨택 감각, 기본 룰 | 1 |
| 2 | **Serving** | 언더핸드 서브, 오버핸드 플로트, 스핀 서브, 점프 서브 | 1 |
| 3 | **Passing (Serve Receive)** | 포암 패스(forearm/platform), 오버핸드 패스, 서브 리시브 포지셔닝 | 1 |
| 4 | **Setting** | 손 모양, 세팅 풋워크, 백세트, 점프 세트 | 2 |
| 5 | **Attacking (Hitting)** | 4스텝 어프로치, 스윙 메커닉, 팁/오프스피드, 백로우 어택 | 2 |
| 6 | **Blocking** | 블로킹 풋워크, 타이밍, 리딩 히터, 더블 블록 | 2 |
| 7 | **Defense (Digging)** | 바닥 디펜스, 스프롤/핏 슬라이드, 커버리지 | 3 |
| 8 | **Strategy** | 포지션(1~6), 로테이션, 5-1/6-2 시스템, 리베로 역할 | 3 |
| 9 | **Athleticism** | 점프 트레이닝, 민첩성, 어깨/발목 부상 예방, 웜업 | 3 |

Phase 1을 "혼자 벽/오픈 스페이스에서 연습 가능한 영역"으로 잡은 basketball 원칙을 그대로 따랐다. Fundamentals·Serving·Passing은 파트너나 네트 없이도 연습이 가능한 편이라 1순위로 뒀다. Setting·Attacking·Blocking은 네트나 토스해줄 사람이 필요해서 2단계로, Defense·Strategy·Athleticism은 3단계로 미뤘다.

> ⚠️ 이 분류·Phase 배정은 초안이다. 실제 연습 환경(아래 8장 질문)에 따라 순서를 조정해야 한다.

### 2.2 태그 (Space / Solo / Equipment / Duration)

basketball은 실제 3곳(집/학교 야외 골대/커뮤니티센터 일요일 코트)에 맞춰 Space 태그를 만들었다. 배구는 실제 연습 장소를 알아야 정확히 설계할 수 있다 (8장 질문 참고). 잠정안:

| 태그 | 장소 | 비고 |
|---|---|---|
| `Home` | 실내, 네트 없음 | 벽치기, 볼 핸들링, 서브 토스 연습 |
| `Open space / Park` | 마당·공터, 네트 있을 수도 없을 수도 | 서브, 패싱, 셀프 토스 |
| `Court w/ net` | 정식 네트가 있는 코트 (실내 체육관 등) | 희소 자원일 가능성 — basketball의 "Indoor court, 일요일 1회"처럼 주 1회형일 수 있음 |

Solo/Equipment/Duration 태그는 basketball과 동일한 형태(`Solo`/`Partner`, `Ball only`/`Net`/`Wall`/`Cones`, `5 min`/`10 min`/`15 min+`)를 유지하되 `Equipment`에 `Net`, `Wall` 옵션 추가.

### 2.3 데이터 모델 변경점 (`types.ts`)

basketball의 `Skill`/`Video`/`Category` 인터페이스는 스포츠 중립적이라 거의 그대로 재사용 가능. 바꿀 부분만:

- `CategoryId`: 위 2.1의 9개 슬러그로 교체
- `SpaceTag` / `EquipmentTag`: 2.2 기준으로 교체 (`'Court w/ net'`, `'Net'`, `'Wall'` 등 추가)
- `Level` / `LEVEL_NAMES` / `LEVEL_BLURBS`: `Beginner/Intermediate/Advanced` 그대로 재사용 가능 (스포츠 무관 개념)
- 나머지(`Skill`, `Video`, `SkillTags`, `Category`)는 필드 구조 변경 없음

---

## 3. 화면 (Screens) — basketball과 거의 동일

- **Home**: 사이트 한 줄 소개, Phase 1 카테고리 그리드(3개만 노출), "New to volleyball? Start here" 버튼, 검색창
- **Category**: Level 1~3 아코디언(Level 1 기본 펼침), 태그 필터
- **Skill Detail**: 영상 파사드, 설명, Key Points, Common Mistakes, Prerequisites/Related
- **Search**: 클라이언트 사이드 검색 (이름/요약/태그)

화면 코드는 basketball에서 그대로 포크하고, 텍스트만 "Hoops Handbook" → 새 사이트명으로 교체.

---

## 4. 실행 단계 (작업 순서)

1. **저장소 초기화**
   - `D:\workspace\volleyball`에 `git init`, basketball의 `.gitattributes`/`.gitignore`/`.oxlintrc.json` 복사
   - `package.json` 새로 작성 (`name: "volleyball"`), basketball의 dependencies/devDependencies 동일 버전으로 시작
2. **스캐폴딩 이식**
   - `src/App.tsx`, `main.tsx`, `components/`, `pages/`, `lib/` 를 basketball에서 복사
   - `vite.config.ts`의 `BASE`를 `/volleyball/`로, PWA manifest(name/short_name/description/theme_color) 교체
   - `index.html`의 타이틀·GoatCounter 사이트 코드 교체(또는 분석 스크립트 제거 여부 결정)
3. **타입/데이터 골격**
   - `src/types.ts`를 2.3 기준으로 수정
   - `src/data/categories.ts`에 9개 카테고리 정의(Phase 값 포함)
   - `src/data/skills/*.ts` 빈 배열로 9개 파일 생성, `data/index.ts`에 등록
4. **디자인 결정**
   - basketball처럼 `design/` 캔버스로 5개 화면 시안 먼저 잡을지, 톤(색/폰트)을 다르게 가져갈지 결정 (배구는 파란/노랑 계열이 흔하지만 basketball의 "무채색+포인트 컬러 1개" 원칙을 유지할지는 취향 문제)
   - 난이도 표시 방식(3칸 막대) 등 접근성 패턴은 그대로 재사용 권장
5. **Phase 1 콘텐츠 채우기**
   - Fundamentals / Serving / Passing 3개 카테고리, 레벨 1~3, 기술 20~30개
   - 기술별 유튜브 영상은 basketball의 5.5 기준(설명 영상일 것, 5분 이하, 아이 시청 가능, 출처 표기)을 그대로 채택
6. **PWA/아이콘**
   - 아이콘 디자인(배구공 모티프), manifest 192/512/maskable 생성
7. **배포**
   - basketball의 `.github/workflows`를 그대로 복사해 GitHub Pages 배포 파이프라인 구성
   - 저장소 public 전환, `sehyunnoh.github.io/volleyball/` 확인
8. **Phase 2 → 3 확장**
   - 데이터 파일 추가만으로 끝나는지 검증 (basketball에서 실제로 "화면 코드 0줄 변경"으로 끝난 것과 동일하게)

---

## 5. 열린 질문 (사용자 확인 필요)

basketball의 intent.md는 실제 가족 상황(아빠+12세 아들+9세 딸, 연습 장소 3곳, 학교 야외 골대 등)에 강하게 맞춰져 있었다. volleyball도 같은 방식으로 만들려면 아래를 확인해야 정확한 `intent.md`를 쓸 수 있다. 우선은 basketball과 동일한 대상(같은 가족)이라고 가정하고 진행하되, 아니라면 알려주면 반영.

1. **대상 사용자** — basketball과 동일하게 "배구를 안 배워본 아빠 + 아이 2명"인가, 아니면 사용자 본인이 직접 배우는 용도인가?
2. **실제 연습 환경** — 집/공터/네트 있는 코트 중 실제로 갈 수 있는 곳과 빈도 (basketball의 "커뮤니티센터 일요일 오전 1회"처럼 희소 자원이 있는지)
3. **레포/도메인** — `github.com/sehyunnoh/volleyball` + `sehyunnoh.github.io/volleyball/`로 동일하게 진행해도 되는지
4. **basketball과 디자인 톤을 통일할지, 배구만의 색(예: 파랑/노랑 계열)으로 차별화할지**
5. **코드 재사용 방식** — basketball 저장소를 fork/복사해서 시작할지, 아니면 npm 패키지로 공통 컴포넌트를 뽑아 두 사이트가 공유할지 (지금 단계에선 복사 후 독립 진화를 권장 — basketball도 처음부터 그렇게 시작했고, 조기 추상화는 basketball의 원칙에도 어긋남)

---

## 6. 예상 폴더 구조

```
volleyball/
├── .github/                 # basketball의 배포 워크플로 복사
├── design/                  # 화면 캔버스 (선택)
├── public/                  # 폰트, 아이콘
├── src/
│   ├── components/          # Layout, SkillCard, VideoFacade, badges
│   ├── data/
│   │   ├── categories.ts
│   │   ├── index.ts
│   │   └── skills/
│   │       ├── fundamentals.ts
│   │       ├── serving.ts
│   │       ├── passing.ts
│   │       ├── setting.ts
│   │       ├── attacking.ts
│   │       ├── blocking.ts
│   │       ├── defense.ts
│   │       ├── strategy.ts
│   │       └── athleticism.ts
│   ├── lib/                  # search, youtube, seo, analytics
│   ├── pages/                # Home, Browse, Category, SkillDetail, Search, NotFound
│   ├── types.ts
│   ├── index.css
│   └── main.tsx
├── intent.md                 # 이 plan.md를 바탕으로 basketball 형식에 맞춰 다음 단계로 작성
├── index.html
├── package.json
└── vite.config.ts
```

---

## 7. 다음 액션

이 plan.md에 동의하면, basketball의 `intent.md` 포맷을 그대로 따라 `intent.md`를 먼저 작성(5장 열린 질문 답변 반영)하고, 그 다음 4장의 실행 단계를 순서대로 진행하는 걸 제안한다.
