PUSH
git push origin landing-page

git checkout develop

ATUALIZAR REPO 
git pull origin develop

yarn json-server --watch db.json

PARA RODAR A API
node server.js