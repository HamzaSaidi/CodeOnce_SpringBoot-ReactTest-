#base image
FROM openjdk:11
#make directory

RUN mkdir -p /app
#copy source code in the container
COPY . /app

#set the working directoty
WORKDIR /app/target

#expose port
EXPOSE 8080

ENTRYPOINT ["java","-jar","backend-0.0.1-SNAPSHOT.jar"]
