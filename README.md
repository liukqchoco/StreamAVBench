# StreamAV-Bench Project Page

This folder contains the standalone public project page. It intentionally
excludes the unreleased paper PDF, code, dataset, and leaderboard data.

## Local preview

```bash
cd final_md/StreamAVBench-page
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish

Run the following commands yourself after reviewing the files:

```bash
cd "/m2v_intern/liukaiqi/skills/aris/test1/Auto-claude-code-research-in-sleep/final_md/StreamAVBench-page"

git init -b main
git status --short
git add index.html styles.css script.js README.md assets

GIT_AUTHOR_NAME="Kaiqi Liu" \
GIT_AUTHOR_EMAIL="112160835+liukqchoco@users.noreply.github.com" \
GIT_COMMITTER_NAME="Kaiqi Liu" \
GIT_COMMITTER_EMAIL="112160835+liukqchoco@users.noreply.github.com" \
git commit -m "Launch the StreamAV-Bench project page"

git remote add origin https://github.com/liukqchoco/StreamAVBench.git
gh auth setup-git
git push -u origin main
```

Configure GitHub Pages to deploy from the `main` branch and `/(root)`.
