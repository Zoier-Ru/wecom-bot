# 使用官方 Node 镜像
FROM node:18

# 创建 app 目录
WORKDIR /app

# 拷贝文件
COPY package*.json ./
RUN npm install

# 拷贝项目文件
COPY . .

# 暴露端口（虽然 bot 不监听，但必须有）
EXPOSE 3000

# 启动命令
CMD ["npm", "start"]
