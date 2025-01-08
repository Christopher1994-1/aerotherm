from django.shortcuts import render
import datetime

# Create your views here.




def index(request):
    year: str = str(datetime.datetime.now()).split(' ')[0].split('-')[0]
    
    
    context = {
        "year": year
    }
    
    return render(request, "index.html", context)