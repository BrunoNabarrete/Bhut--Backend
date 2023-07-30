FROM node:18.17

# Mudar para o diretório de trabalho /app-backend

WORKDIR /src
# Copiar os package.json, package-lock.json e packages.npm para o container
COPY package*.json ./
# Instalar as dependências Node
RUN npm install
# Copiar o restante dos arquivos da aplicação para o container
COPY . .
# Sinalize que aplicação expõe a porta 3001
EXPOSE 3001
# Configurar os comandos para iniciar a aplicação de acordo com as boas práticas
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]
# Dica: Leia a seção Docker e Docker-compose no README para mais informações