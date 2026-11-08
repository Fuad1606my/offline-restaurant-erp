# Offline Restaurant ERP — First 3 Weeks Starter

This starter covers the first three weeks of the learning/build plan:
- Week 1: development environment, JavaScript fundamentals and small exercises
- Week 2: TypeScript fundamentals, reusable functions, Git workflow
- Week 3: HTML/CSS and a first React + TypeScript dashboard prototype

This is a learning prototype only. It does NOT yet include Electron, SQLite, real billing, printer integration, authentication, or production security.

## Requirements
- Windows 10/11
- Node.js LTS (includes npm)
- Git
- Visual Studio Code

## Start
1. Open this folder in VS Code.
2. Open Terminal > New Terminal.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local address Vite prints (usually http://localhost:5173).

## Build check
```bash
npm run build
npm run preview
```

## Suggested Git workflow
Create a repository first, then use branches:
```bash
git init
git branch -M main
git add .
git commit -m "chore: initialize three-week learning project"

git switch -c week-01/javascript-foundations
# complete Week 1 work, then:
git add .
git commit -m "feat: add JavaScript fundamentals exercises"
git switch main
git merge week-01/javascript-foundations

git switch -c week-02/typescript-foundations
# complete Week 2 work, then commit and merge as above

git switch -c week-03/react-dashboard
# complete Week 3 work, then commit and merge as above
```

If you create a GitHub repository, connect it:
```bash
git remote add origin https://github.com/YOUR-USERNAME/offline-restaurant-erp.git
git push -u origin main
git push -u origin --all
```

## Project structure
- `learning/week-01/` JavaScript practice
- `learning/week-02/` TypeScript practice
- `src/` Week 3 React prototype

## Important
Do not store passwords, real customer information, or real business financial data in this learning project.
