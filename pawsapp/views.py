from django.shortcuts import render


def homepage(request):
    return render(request, 'storefront/home.html')

def nosotros(request):
    return render(request, 'storefront/nosotros.html')