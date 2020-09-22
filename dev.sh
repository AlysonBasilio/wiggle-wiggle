function dkrunfront() {
  docker container run -it --rm -v $(pwd)/front:/app -w /app --user $(id -u):$(id -g) --name wiggle-wiggle-run node $@
}

function dkupfront() {
  docker container run -it --rm -v $(pwd)/front:/app -w /app --user $(id -u):$(id -g) --name wiggle-wiggle --publish 3000:3000 node yarn start
}

function dkupback() {
  docker container run -it --rm -v $(pwd)/back:/app -w /app --user $(id -u):$(id -g) --name wiggle-wiggle-server --publish 3000:3000 node npm start
}

function dkbashback() {
  docker container run -it --rm -v $(pwd)/back:/app -w /app --user $(id -u):$(id -g) --name wiggle-wiggle-server --publish 3000:3000 node bash
}
