FROM node:18

# 设置工作目录
WORKDIR /app

# 拷贝 package.json 和 lock 文件
COPY package*.json ./

# 安装依赖
RUN npm install

# 拷贝全部源代码
COPY . .

# 暴露端口（虽然不用监听，但必须有）
EXPOSE 3000

# 设置工作目录
WORKDIR /app

# 拷贝 package.json 和 lock 文件
COPY package*.json ./

# 安装依赖
RUN npm install

# 拷贝全部源码
COPY . .

# 暴露端口（虽然不用监听，但必须有）
EXPOSE 3000

# 启动命令
CMD ["npm", "start"]
