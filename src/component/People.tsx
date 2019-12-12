import React from 'react';
import "./People.scss";

import { PageTitle } from './PageTitle';
import { MemberCard } from './MemberCard';

const People = () => {
  return (
    <div className="People">
      <div className="container">
        <div className="row">
          <div className="Service__pagetitle col-1">
            <PageTitle title="PEOPLE" />
          </div>
          <div className="col-10 Service__cards">
            {members.map(member => (
              <React.Fragment key={member.name}>
                <MemberCard
                  name={member.name}
                  role={member.role}
                  imageSource={member.imageSource}
                  comment={member.comment} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};

const members = [
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

export { People };