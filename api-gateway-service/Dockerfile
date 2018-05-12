FROM node:9.11
RUN mkdir /server
COPY * /server/
RUN cd /server && npm install
CMD cd /server && node index.js
