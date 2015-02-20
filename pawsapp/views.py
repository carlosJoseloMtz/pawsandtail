from django.shortcuts import render


def homepage(request):
    return render(request, 'storefront/home.html')

def nosotros(request):
    return render(request, 'storefront/nosotros.html')

def galeria(request):
    return render(request, 'storefront/galeria.html')

def cms(request):
    return render(request, 'storefront/cms.html')

def productos(request):
    return render(request, 'storefront/productos.html')

def servicios(request):
    return render(request, 'storefront/servicios.html')

def contacto(request):
    return render(request, 'storefront/contacto.html')