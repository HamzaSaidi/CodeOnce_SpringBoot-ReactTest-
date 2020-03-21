##                                APP DESCRIPTION


* back-end

```

back-end/
    └── src/
        ├── main/
        │   └──java/
        │         └──hamza/
        │              └──backend/
        │                     ├── Controller/    //this folder contains Restcontroller
        │                     │    
        │                     └──  Service/      // this folder contains the service bean matchCount
        └── test/
              └── java/
                    └──hamza/
                         └── backend/
                              ├── ControllerTests/ this folder contains Restcontroller's unit test                      │
                              └── ServiceTests/  this folder contains the service's unit test matchCount


```


* front-end
```
front-end/
     └── src/
         └── Componentes/
                       └──DisplayTextComponent.js   //this is a component that color matched characters and display it
                       │            
                       └──InputTextComponent.js  //this is a component has the form
                       │            
                       └──PageComponent.js    //parent component for input and display


```



##                      TO RUN THE APP ON YOUR LOCAL MACHINE





* install [docker](https://docs.docker.com/installation/) and [docker-compose](https://docs.docker.com/compose/install/)



* clone this project 


```
 git clone https://github.com/HamzaSaidi/CodeOnce_SpringBoot-ReactTest-
```



* Navigate to the directory in which you cloned the project and execute this command
```
docker-compose up
```

* In the web browser navigate to localhost:3000



