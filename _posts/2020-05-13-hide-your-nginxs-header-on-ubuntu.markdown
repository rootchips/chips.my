---
layout: post
title: Hide Your Nginx's Header On Ubuntu
tags: [devops, nginx, ubuntu]
image: '/images/posts/1.jpg'
---

Did you know you can hide your web server header? So what purpose of this approach?

I believe this is the best for the security practice.

So here we go. We need to get the sources/dependecies first.

Upgrade nginx to the latest stable
{% highlight sh %}
$ sudo apt install software-properties-common nginx=stable
{% endhighlight %}

Add nginx repository
{% highlight sh %}
$ sudo add-apt-repository -y ppa:nginx/$nginx
{% endhighlight %}

Update the package lists
{% highlight sh %}
$ sudo apt update
$ sudo apt dist-upgrade
{% endhighlight %}

Check nginx version
{% highlight sh %}
$ nginx -v
{% endhighlight %}

Install nginx-extras
{% highlight sh %}
$ sudo apt install nginx-extras
{% endhighlight %}

Edit Nginx configuration file
{% highlight sh %}
$ sudo vim /etc/nginx/nginx.conf
{% endhighlight %}

Add modules in the first line and more_set_headers in http block
{% highlight sh %}
load_module modules/ngx_http_headers_more_filter_module.so;

http {
	more_set_headers "Server: Your Server";
}
{% endhighlight %}

Test your nginx config and restart it
{% highlight sh %}
$ sudo nginx -t
$ sudo service nginx restart
{% endhighlight %}


That's it!




