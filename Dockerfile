FROM node:10-alpine

RUN mkdir /opt/positiveplus

WORKDIR /opt/positiveplus

COPY app ./

RUN npm install

EXPOSE 80

CMD ["npm", "start"]