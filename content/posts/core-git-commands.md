---
# createdAt: "2020-11-22"
# updatedAt: "2020-11-22"
title: Core Git 명령어 정리
description: 실제 서비스 개발하면서 맨날 까먹는 Core git 명령어 핵심요약.
tags:
  - git
---

## 1. Git의 4가지 영역

git은 일반적으로 4개의 영역으로 관리된다.

### 1.1 Working Directory (작업영역)

- `.git`를 제외한 실제 프로젝트 디렉토리

### 1.2 Repository (저장소)

- `.git` 디렉토리
- 실제 변경 이력 포인터를 저장.

### 1.3 Index (Staging Area)

- Repository로 저장되기 전 준비 영역.
- `.git/index` 에 저장됨.
- `git add 파일명` 으로 Index로 저장.

### 1.4 Stash

- Commit 하기전 작업내용을 임시 영역에 별도 저장.
