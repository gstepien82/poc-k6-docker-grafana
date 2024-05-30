# About
This is a very basic project showing potential setup of k6.io performance tests(including service actions, .env, reporting etc) 
It also demonstrates how to run load tests with containerised instances of K6, Grafana and InfluxDB.
Implementation requires docker and is based on:
https://medium.com/swlh/beautiful-load-testing-with-k6-and-docker-compose-4454edb3a2e3

#### Execution with docker and graphana
docker compose run -v ${workspace}\docker-k6-grafana-influxdb:/mount k6 run /mount/scripts/user.test.js

#### Execution locally
npm run user:test

#### Dashboards
The dashboard in /dashboards is adapted from the excellent K6 / Grafana dashboard here:
https://grafana.com/grafana/dashboards/2587

# Debug tests
For debugging the failing scenario under single user and no load comment out options in test, set TARGET_VUS=1 and make test function default:
ex. export default function getAndPost()

# Report generated directly in scripts
k6-reporter and junit xml are handled via handleSummary method

# Report generated manually
node reportGeneration.js in utils folder

