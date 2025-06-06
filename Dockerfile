FROM node:18

# 设置工作目录
WORKDIR /app

# 拷贝 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 拷贝全部源代码
COPY . .

# 设置启动命令
CMD ["npm", "start"]
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
