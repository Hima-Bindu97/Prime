FROM debian:9.5-slim

ADD prime.js /prime.js
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/node prime.js"]