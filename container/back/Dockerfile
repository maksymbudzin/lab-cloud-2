FROM python:3.8

WORKDIR /back

RUN apt-get update -y
RUN apt-get install -y git pipenv

RUN git clone https://github.com/maksymbudzin/lab-cloud-2.git

WORKDIR /back/lab-cloud-2/amplify/backend/function/area/src
RUN pip3 install --upgrade pip -r requirements.txt
RUN pip3 install --user pipenv
RUN pip3 --no-cache-dir install --upgrade awscli
RUN pip3 install gunicorn

ENV STORAGE_AREA_NAME=area-dev

EXPOSE 5000

CMD ["gunicorn", "-b", ":5000", "index:app"]