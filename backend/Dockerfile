FROM python:3.6


WORKDIR /src

COPY requirements.txt /src
RUN pip3 install --upgrade pip -r requirements.txt

COPY . .

EXPOSE 8000