---
createdAt: "2020-11-22"
updatedAt: "2020-11-22"
title: Core Git 명령어 정리
description: 실제 서비스 개발하면서 맨날 까먹는 Core git 명령어 핵심요약.
tags:
  - git
---

## 1. Git의 4가지 영역

<pre>
            -add->      -commit->     -push->
+-------------+-------------+------------+-------------+
| Working dir |    Index    | Local repo | Remote repo |
+-------------+-------------+------------+-------------+
         <-checkout-                 <-fetch or pull-
</pre>

git은 일반적으로 4개의 영역으로 관리된다.

- Working Directory (작업영역)
- Repository (저장소)
- Index (Staging Area)
- Stash

## 2. Git WorkFlow

1. Jerry는 깃허브에서 'project’라는 이름의 원격 저장소를 만들었다.

   - **원격 저장소(Remote repository)**: 일반적으로 GitHub, GitLab 또는 BitBucket과 같은 호스팅 서비스에서 호스팅된 저장소.

2. 이 원격 저장소를 <pre>git clone https://github.com/jerry/project.git </pre>명령으로 자신의 컴퓨터에 복사해 **로컬 저장소**를 만들었다.

   - **로컬 저장소(Local repository)**: 컴퓨터의 로컬 환경에 위치한 저장소.

3. 그리고 **작업 디렉토리**에서 index.html 파일을 작성했다.

   - **작업 디렉토리(Working directory)**: 실제 파일이 위치한 디렉토리.

4. 이 파일을 <pre>git add index.html</pre> 명령으로 변경된(Modified) 파일들을 **스테이징**해 **인덱스** 영역에 등록했다.

   - **스테이징(Staging)**: 확정할 변경 사항을 준비시키는 것.
   - **인덱스(Index)**: 확정할 준비가 된 변경 사항들이 모인 영역.

5. 이어서 <pre>git commit -m "index.html 추가" </pre> 명령으로 스테이징된(Staged) 변경 사항을 커밋해 로컬 저장소에 등록했다.

   - **커밋(Commit)**: 인덱스의 변경 사항들을 확정하는 것. 여기까지는 로컬 저장소에서 일어나는 일이며, 아직 다른 사람에게는 변경 사항이 공개되지 않은 상태다.
   - **헤드(HEAD)**: 작업 중인 브랜치의 선두를 가리키는 포인터. 헤드 이하의 커밋들을 확정된 것으로 취급하며, 필요에 따라 특정 커밋이나 브랜치를 가리키도록 헤드를 움직여 작업 디렉토리의 상태를 바꿀 수 있다.

6. 마지막으로 <pre>git push origin master</pre> 명령으로 **푸시**해 커밋된(Committed) 변경 사항을 원격 저장소에 게시했다.

   - **푸시(Push)**: 확정된 변경 사항을 원격 저장소에 게시하는 것. 드디어 변경 사항이 공개된다.
   - **origin**: 로컬 저장소의 원본 원격 저장소. clone 과정에서 자동으로 등록된다. clone으로 로컬 저장소를 만든 것이 아니라면 따로 추가해야 한다.

## 3. remote push 하기전 커밋 되돌아가기

<table class="table-auto border rounded">
<tr class="text-center bg-green-300">
    <th>옵션</th>
    <th>HEAD의 위치</th>
    <th>Index/Staging Area</th>
    <th>Working Directory</th>
</tr>
<tr class="text-center">
    <td>soft</td>
    <td>변경함</td>
    <td>변경 안 함</td>
    <td>변경 안 함</td>
</tr>
<tr class="text-center">
    <td>mixed</td>
    <td>변경함</td>
    <td>변경함</td>
    <td>변경 안 함</td>
</tr>
<tr class="text-center">
    <td>hard</td>
    <td>변경함</td>
    <td>변경함</td>
    <td>변경함</td>
</tr>
</table>

- Index랑 WD 수정사항 살리고 커밋만 이전커밋으로(soft)

  <pre>git reset --soft HEAD^</pre>

- WD 수정사항만 살리고 이전커밋으로(mixed)

  <pre>git reset --mixed HEAD^</pre>

- Index랑 WD 수정사항 버리고 완전히 이전커밋으로(hard)
  <pre>git reset --hard HEAD^</pre>

## 4. remote push 후라면 ?

- reset 대신 revert를 사용하자. (또는 공용브런치의 경우)
