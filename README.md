# 팜에어 웹사이트 수정 가이드

## 내용 수정(임직원 소개 등)

`src/info.ts` 파일 내부에서 해당 내용을 수정합니다. 예를 들어 직원 코멘트를 수정하고 싶을 경우

```typescript
//멤버 소개 내용입니다.
const members: Member[] = [
  {
    name: "홍길동",
    role: "CEO",
    imageSource: "/static/asset/gildong.jpg",
    comment: "모든 국민은 그 보호하는 자녀에게 적어도 초등교육과 법률이 정하는 교육을 받게 할 의무를 진다.",
  },
]
```
의 comment를 변경하면 됩니다.

## 레이아웃/스타일 수정

각 컴포넌트는 이름이 같은 scss 파일을 가지고 있습니다.
각 파일에서 수정합니다.