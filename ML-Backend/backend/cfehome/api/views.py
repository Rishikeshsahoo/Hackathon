from django.shortcuts import render
import requests
import pickle
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from django.db import transaction
from django.conf import settings
import pandas as pd
import os
from bs4 import BeautifulSoup

# Create your views here.
def api_home(request,*args,**kwargs):
    return JsonResponse({'message' : 'hello i am api_home'})


filepath=os.path.join(settings.BASE_DIR,'binary/phishing.sav')
filepath2=os.path.join(settings.BASE_DIR,'binary/xss.sav')
filepath3=os.path.join(settings.BASE_DIR,'binary/vectorizer.sav')
filepath4=os.path.join(settings.BASE_DIR,'binary/cvss.sav')


def getHTMLdocument(url):
      
    # request for HTML document of given url
    response = requests.get(url)
      
    # response will be provided in JSON format
    return response.text


phishing=pickle.load(open(filepath,'rb'))
vectorizer_m=pickle.load(open(filepath3,'rb'))
xss=pickle.load(open(filepath2,'rb'))
cvss=pickle.load(open(filepath4,'rb'))

class Phishing(APIView):
    
    @transaction.atomic
    def get(self, request):
        return JsonResponse({'message' : 'hello i am request'})
    @transaction.atomic
    def post(self,request):
        d = request.data
        test = pd.DataFrame(data=d)
        # print(settings.BASE_DIR)
        x=phishing.predict(test)
        return JsonResponse({"data" :(int)(x[0]) })
class XSS(APIView):
    
    @transaction.atomic
    def get(self, request):
        return JsonResponse({'message' : 'hello i am request'})
    @transaction.atomic
    def post(self,request):
        data = request.data['url']
        # print("dataaa",data)
        html_document = getHTMLdocument(data)
        soup = BeautifulSoup(html_document, 'html.parser')
        rel=[]
        rel.append(str(soup))
        
        p=vectorizer_m.transform(rel)

        x=(xss.predict(p))
        return JsonResponse({"data":(int)(x[0]) })
    
class CVSS(APIView):
    
    @transaction.atomic
    def get(self, request):
        data=request.data

        return JsonResponse({'message' : 'hello i am request'})
    @transaction.atomic
    def post(self,request):
        data = request.data
        print(data)
        test = pd.DataFrame(data=data)
        x=(cvss.predict(test))
        return JsonResponse({"data":x[0]})
