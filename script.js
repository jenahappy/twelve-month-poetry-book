const poems = [
  {
    month: "1월",
    subtitle: "겨울의 첫 문장",
    meta: "눈발이 늦게 도착한 밤, 가장 조용한 숨을 받아 적는다.",
    poem: `창문에 기대면\n밤이 먼저 하얘지고\n내 마음은 그 뒤를 따라온다\n\n가만히 쌓이는 것들은\n대개 큰 소리를 내지 않아서\n새해의 결심도 눈처럼 내린다`
  },
  {
    month: "2월",
    subtitle: "짧은 달의 심장",
    meta: "모자란 듯 지나가는 날들이 오히려 깊게 남는 달.",
    poem: `달력의 끝이 빨라질수록\n손끝은 더 오래 머문다\n\n작은 컵 안의 차가 식는 동안\n우리는 말보다 온기를 먼저 배운다\n\n짧다는 이유로\n더 진하게 피어나는 것들이 있다`
  },
  {
    month: "3월",
    subtitle: "흙이 풀리는 시간",
    meta: "계절이 몸을 푸는 소리를 가장 먼저 듣는 달.",
    poem: `땅은 오래 접어 둔 편지처럼\n서서히 주름을 편다\n\n발목에 닿는 바람마다\n봄은 아직 연습 중인 목소리로\n내 이름을 불러 본다`
  },
  {
    month: "4월",
    subtitle: "꽃의 문장들",
    meta: "한 번에 너무 많은 색이 피어서 오히려 아득한 계절.",
    poem: `벚나무 아래를 걷다가\n한 사람의 기억이 아닌\n한 계절의 기억이 된다\n\n흩날리는 것은 끝이 아니라\n가벼워지는 방법이라는 걸\n꽃잎이 먼저 안다`
  },
  {
    month: "5월",
    subtitle: "초록의 문턱",
    meta: "햇살이 가장 단정한 표정으로 내려앉는 달.",
    poem: `초록은 자라는 색이라서\n볼수록 마음이 넓어진다\n\n창가에 놓인 화분 하나도\n오늘의 빛을 놓치지 않으려\n잎을 조금 더 펼쳐 든다`
  },
  {
    month: "6월",
    subtitle: "비가 오기 전의 향",
    meta: "젖기 직전의 공기 속에서 가장 선명해지는 감정들.",
    poem: `빗방울이 오기 전\n골목은 먼저 냄새를 바꾼다\n\n나는 문득 오래된 다짐들을 꺼내어\n젖어도 번지지 않을 말인지\n천천히 살펴본다`
  },
  {
    month: "7월",
    subtitle: "여름의 심부",
    meta: "태양이 가장 깊숙한 곳까지 도달하는 시기.",
    poem: `햇빛은 정오를 지나며\n사물의 그림자를 짧게 접어 둔다\n\n숨이 차오르는 계단 끝에서\n나는 여름이란 계절이 아니라\n버티는 기술이라는 걸 배운다`
  },
  {
    month: "8월",
    subtitle: "한낮의 파도",
    meta: "열기 속에서도 끝내 식지 않는 장면들을 모은 달.",
    poem: `멀리서 들려오는 매미 소리는\n여름이 남긴 필사본 같다\n\n가장 뜨거운 시간의 가장자리에서\n우리는 물 한 컵처럼 서로를 건네며\n하루를 식힌다`
  },
  {
    month: "9월",
    subtitle: "바람이 교정한 문장",
    meta: "뜨거웠던 계절의 문장을 서늘하게 다듬는 달.",
    poem: `저녁이 빨라질수록\n하늘은 문장을 짧게 쓴다\n\n한여름의 과장은 지워지고\n남아 있는 진심만이\n서늘한 바람에 오래 흔들린다`
  },
  {
    month: "10월",
    subtitle: "빛의 기울기",
    meta: "햇살이 부드럽게 기울며 모든 것을 한 번 더 바라보게 하는 달.",
    poem: `낙엽은 떨어지기보다\n천천히 돌아가는 것에 가깝다\n\n끝을 향해 기우는 빛이\n오히려 가장 다정해서\n나는 자꾸 뒤를 돌아본다`
  },
  {
    month: "11월",
    subtitle: "늦은 숨",
    meta: "말수는 줄고 생각은 길어지는 문턱의 시간.",
    poem: `나무가 잎을 비울수록\n거리는 더 멀리 보인다\n\n덜어 낸 자리마다\n겨울이 들어올 틈이 생기고\n나는 그 틈에 조용히 하루를 접어 둔다`
  },
  {
    month: "12월",
    subtitle: "끝과 시작의 테두리",
    meta: "마지막 장을 덮는 손끝에서 다음 첫 장의 감촉이 느껴진다.",
    poem: `한 해의 모서리를 쓸어 보면\n기쁨과 후회가 함께 반짝인다\n\n끝난다는 말은 늘 조금 쓸쓸하지만\n그래서 우리는 마지막 밤에도\n다시 시작할 문장을 준비한다`
  }
];

const pageDisplay = document.getElementById("pageDisplay");
const pageNumber = document.getElementById("pageNumber");
const pageMonth = document.getElementById("pageMonth");
const pageSubtitle = document.getElementById("pageSubtitle");
const pagePoem = document.getElementById("pagePoem");
const monthTitle = document.getElementById("monthTitle");
const monthMeta = document.getElementById("monthMeta");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

function updateCaption() {
  const current = poems[currentIndex];
  monthTitle.textContent = current.month;
  monthMeta.textContent = current.meta;
}

function renderCurrentPage() {
  const current = poems[currentIndex];
  pageNumber.textContent = `${String(currentIndex + 1).padStart(2, "0")} / 12`;
  pageMonth.textContent = current.month;
  pageSubtitle.textContent = current.subtitle;
  pagePoem.textContent = current.poem;
  pageDisplay.classList.remove("is-changing");
  void pageDisplay.offsetWidth;
  pageDisplay.classList.add("is-changing");
}

function setPage(target) {
  currentIndex = Math.max(0, Math.min(target, poems.length - 1));
  renderCurrentPage();
  updateCaption();
}

prevButton.addEventListener("click", () => setPage(currentIndex - 1));
nextButton.addEventListener("click", () => setPage(currentIndex + 1));

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") setPage(currentIndex - 1);
  if (event.key === "ArrowRight") setPage(currentIndex + 1);
});

setPage(0);
