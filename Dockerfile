FROM node:8.11.4

RUN mkdir /opt/positiveplus

WORKDIR /opt/positiveplus

COPY app ./

RUN npm install

EXPOSE 80 27017

CMD ["npm", "start"]