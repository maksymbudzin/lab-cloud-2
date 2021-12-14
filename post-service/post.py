import requests
import json
import time
from random import randint


url = 'http://www.makslviv.xyz/api/'

headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

while True:
    myobj = {"timestamp": str(time.time()), "sensor_id": "3",
             "sensor_type": "thing-3", "location": str(randint(0, 100)),
             "humidity": str(str(randint(0, 100))),
             "lux": str(randint(0, 100)),
             "API_KEY": "04012002"}
    x = requests.post(url, data=json.dumps(myobj), headers=headers)
    print("SENT:", myobj)
    print(x.text)
    time.sleep(10)
~                                                                                                                                                                                                          
~                     
