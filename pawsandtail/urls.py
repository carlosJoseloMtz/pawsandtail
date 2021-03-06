from django.conf.urls import patterns, include, url

from django.contrib import admin
from pawsapp import views
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'pawsandtail.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    # uncomment next line to integrate django out of the box admin tool
    # url(r'^admin/', include(admin.site.urls)),

    url(r'^$', views.homepage),
    url(r'^nosotros/$', views.nosotros),
    url(r'^galeria/$', views.galeria),
    url(r'^cms/$', views.cms),
    url(r'^productos/$', views.productos),
    url(r'^servicios/$', views.servicios),
    url(r'^contacto/$', views.contacto),

    # add all needed request mapping here
)
