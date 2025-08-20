# Megan's Honors Thesis

## For Deployment

```bash
cd sarahcoyne
npm install
ng build --configuration=production --base-href=/HonorsThesis/
npx angular-cli-ghpages --dir=dist/thesis_site/browser
```