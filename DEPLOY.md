# Sentinel Research Site — Deploy to GitHub Pages

Files are already committed in: `~/zhc-workspace/sentinel-site/`

## Step 1: Create GitHub repo

Go to: https://github.com/new
- Name: `sentinel-research-site`
- Public repo ✓
- Do NOT initialize with README
- Click "Create repository"

## Step 2: Push from zhc-prod

SSH to zhc-prod and run:

```bash
cd ~/zhc-workspace/sentinel-site
git branch -M main
git remote add origin https://github.com/grandcondor91/sentinel-research-site.git
git push -u origin main
```

(Replace `grandcondor91` with your actual GitHub username if different)

## Step 3: Enable GitHub Pages

Option A — Via GitHub web UI:
1. Go to repo → Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `main` / folder: `/ (root)`
4. Click Save

Option B — Via gh CLI (if you install it later):
```bash
gh repo edit sentinel-research-site --enable-pages --pages-source main:
```

## GitHub Pages URL

Once enabled (takes ~2 min):
`https://grandcondor91.github.io/sentinel-research-site/`

## Step 4: Custom Domain (GoDaddy → sentinelresearch.ai)

### DNS Records to add in GoDaddy:

**CNAME record** (for www):
```
Type:  CNAME
Name:  www
Value: grandcondor91.github.io
TTL:   600
```

**A records** (for apex domain @):
```
Type:  A
Name:  @
Value: 185.199.108.153
TTL:   600

Type:  A
Name:  @
Value: 185.199.109.153
TTL:   600

Type:  A
Name:  @
Value: 185.199.110.153
TTL:   600

Type:  A
Name:  @
Value: 185.199.111.153
TTL:   600
```

### In GitHub Pages settings:
- Custom domain: `sentinelresearch.ai`
- Check "Enforce HTTPS" (after DNS propagates, ~10-30 min)

GitHub will automatically create a CNAME file in your repo.

## CNAME file (optional, speeds things up)

You can pre-create this in the repo:
```bash
echo "sentinelresearch.ai" > ~/zhc-workspace/sentinel-site/CNAME
cd ~/zhc-workspace/sentinel-site
git add CNAME
git commit -m "Add custom domain CNAME"
git push
```

## Final URL
`https://sentinelresearch.ai`
