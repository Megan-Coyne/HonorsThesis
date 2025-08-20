# Megan's Honors Thesis

## For Deployment

```bash
cd sarahcoyne
npm install
ng build --configuration=production --base-href=/ 
npx angular-cli-ghpages --dir=dist/sarahcoyne/browser
```