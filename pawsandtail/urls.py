from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'pawsandtail.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    # uncomment next line to integrate django out of the box admin tool
    # url(r'^admin/', include(admin.site.urls)),
)
