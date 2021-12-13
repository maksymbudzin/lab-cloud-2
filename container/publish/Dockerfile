FROM python:3.8

WORKDIR /publish

RUN apt-get update -y
RUN apt-get install -y git

RUN git clone https://github.com/maksymbudzin/lab-cloud-2.git

WORKDIR /publish/lab-cloud-2/container/publish

RUN pip3 install requests

CMD ["python3", "post.py"]