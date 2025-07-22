# Bikemodoo

## Git 백업 시스템 사용법

### 초기 설정
1. Git 설치: https://git-scm.com/downloads
2. GitHub에서 새 repository 생성
3. 원격 저장소 연결:
   ```bash
   git remote add origin [GitHub URL]
   git push -u origin main
   ```

### 백업 방법

1. 자동 백업:
   ```bash
   npm run backup
   # 또는
   npm run save
   ```

2. 수동 백업:
   ```bash
   git add .
   git commit -m "커밋 메시지"
   git push
   ```

### .gitignore 설정
다음 파일/폴더들은 자동으로 백업에서 제외됩니다:
- node_modules/
- .next/
- .env 파일들
- 기타 빌드 및 로그 파일들 