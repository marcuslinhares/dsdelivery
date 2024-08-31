# Etapa 1: Construção
FROM node:18 AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos package.json e package-lock.json (ou yarn.lock) para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos para o diretório de trabalho
COPY . .

# Executa o build da aplicação
RUN npm run build

# Etapa 2: Execução
FROM nginx:alpine

# Copia os arquivos de build para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
