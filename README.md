# 원동규의 포트폴리오

💻 Git Rules

📌 Commit

1. 제목을 50글자 내로 제한
2. 제목 끝에 마침표 넣지 않음
3. 어떻게 보다는 무엇과 왜를 설명

📌 Commit Structure

```
헤더는 필수이며, 범위(scope), 본문(body)은 선택사항

<type>(<scope>): <subject> -- 헤더
<BLANK LINE> -- 빈칸

<body>                     -- 본문(선택)
```

📌 Commit Type

```
feat : 새로운 기능에 대한 커밋 (*)
fix : 버그 수정에 대한 커밋 (*)
style : 코드 스타일 혹은 포맷 등에 관한 커밋 (*)
refactor :  코드 리팩토링에 대한 커밋 (*)
build : 빌드 관련 파일 수정에 대한 커밋 (*)
chore : 그 외 자잘한 수정에 대한 커밋 (*)
ci : CI관련 설정 수정에 대한 커밋
docs : 문서 수정에 대한 커밋 (*)
test : 테스트 코드 수정에 대한 커밋
```

📌 Commit Example

```
docs(readme): 프로젝트 소개 및 규칙 작성
style(ui/input): secondary 스타일 작성
```
