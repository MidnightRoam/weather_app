from django.shortcuts import render
from django.views import View
import requests
import datetime


class IndexView(View):
    template_name = 'weatherApp/index.html'
    appid = 'dae49390d96f20b320623219b22cc7a9'
    URL = 'https://api.openweathermap.org/data/2.5/weather'

    def get(self, request, *args, **kwargs):
        PARAMS = {
            'q': 'Europe',
            'appid': self.appid,
            'units': 'metric'
        }
        r = requests.get(url=self.URL, params=PARAMS)
        res = r.json()
        description = res['weather'][0]['description']
        icon = res['weather'][0]['icon']
        city = res['name']
        temp = res['main']['temp']
        time = datetime.date.today()
        weather = res['weather'][0]['main']

        return render(request, self.template_name, {
            'description': description,
            'icon': icon,
            'city': city,
            'temp': temp,
            'time': time,
            'weather': weather,
        })

    def post(self, request, *args, **kwargs):
        PARAMS = {
            'q': request.POST['city'] if request.POST['city'] != '' else 'Europe',
            'appid': self.appid,
            'units': 'metric'
        }
        r = requests.get(url=self.URL, params=PARAMS)
        res = r.json()
        description = res['weather'][0]['description']
        icon = res['weather'][0]['icon']
        city = res['name']
        temp = res['main']['temp']
        time = datetime.date.today()
        weather = res['weather'][0]['main']

        return render(request, self.template_name, {
            'description': description,
            'icon': icon,
            'city': city,
            'temp': temp,
            'time': time,
            'weather': weather,
        })

