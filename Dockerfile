FROM node:20-slim

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o resto do código
COPY . .

# Expõe a porta que o Next usa
EXPOSE 3000

# Rodar em modo desenvolvimento com hot-reload
CMD ["npm", "run", "dev"]