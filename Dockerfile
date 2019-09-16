FROM python:3.6

RUN apt-get -y install curl \
  && curl -sL https://deb.nodesource.com/setup_10.x | bash \
  && apt-get install nodejs


WORKDIR /src

COPY requirements.txt /src
RUN pip3 install --upgrade pip -r requirements.txt

COPY . .

RUN cd frontend && npm install

EXPOSE 8000

CMD [ "npm", "run", "dev"]
CMD [ "python", "./manage.py", "runserver", "0.0.0.0:8000"]



