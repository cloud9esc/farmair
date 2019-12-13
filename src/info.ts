//어바웃 페이지 카드 내용입니다.
export interface Card {
  title: string;
  imageSource: string;
  description: string[];
}

const cards: Card[] = [
  {
    title: "미션",
    imageSource: "/static/asset/mission.jpg",
    description: ["정보기술을 기반으로 1차 산업 재해석 및 지속 가능한 발전을 추구한다."],
  }, {
    title: "핵심 가치",
    imageSource: "/static/asset/corevalue.jpg",
    description: ["품위 있는 이윤 추구.","이윤을 추구하는 과정과 결과에 있어서 사회적으로 존경받을 수 있는 선택을 한다."],
  }, {
    title: "인재상",
    imageSource: "/static/asset/humanresource.jpg",
    description: ["공감하는 인재", "열정적인 인재", "상호 존중하는 인재", "유머감각이 있는 인재"],
  }, {
    title: "비전",
    imageSource: "/static/asset/vision.jpg",
    description: ["미정"],
  }
]

//멤버 소개 내용입니다.
export interface Member {
  name: string,
  role: string,
  imageSource: string,
  comment: string,
}

const members: Member[] = [
  {
    name: "박상국",
    role: "CEO",
    imageSource: "/static/asset/parksanggook.jpg",
    comment: "모든 국민은 그 보호하는 자녀에게 적어도 초등교육과 법률이 정하는 교육을 받게 할 의무를 진다.",
  },
  {
    name: "임현진",
    role: "Back-end Developer",
    imageSource: "/static/asset/imhyunjin.jpg",
    comment: "국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의 위임 또는 직권으로 총리령 또는 부령을 발할 수 있다.",
  },
  {
    name: "유지혜",
    role: "Manager",
    imageSource: "/static/asset/yoojihye.jpeg",
    comment: "모든 국민은 법 앞에 평등하다. 누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다.",
  }
]


//서비스 소개 내용입니다.
export interface Service {
  title: string;
  imageSource: string;
  description: string[];
}

const services: Service[] = [
  {
    title: "TERRAN",
    imageSource: "",
    description: ["테란은 농업 데이터 분석을 통한 농산물 가격예측 서비스입니다."]
  }
]



export {cards, members, services};

