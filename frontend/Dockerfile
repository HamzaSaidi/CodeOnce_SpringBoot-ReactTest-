# base image
FROM node 
#make directory
RUN mkdir -p /app
#copy source code in the container
COPY . /app
# set working directory

WORKDIR /app

EXPOSE 3000

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and app dependencies
 
RUN npm install --silent


# start app
CMD ["npm", "start"]
