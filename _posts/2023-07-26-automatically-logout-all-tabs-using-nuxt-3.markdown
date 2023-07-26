---
layout: post
title: Automatically logout all tabs using Nuxt 3
tags: [vuejs, js, frontend]
---

Let's say, you encounter a problem where you have opened your application in multiple tabs and when you attempt to log out, only one tab gets logged out, while the other tabs remain unaffected. 

To solve this problem, you can use a broadcast channel. This concept is more like publish and subscribe.

Install VueUse
{% highlight sh %}
$ npm i @vueuse/core
{% endhighlight %}

Now we want to publish a logout message to client.

In Auth Store // Pinia
{% highlight js %}
import { useBroadcastChannel } from '@vueuse/core'

const { post } = useBroadcastChannel({ name: 'your-channel' })

export const useAuthStore = defineStore('auth', {
  state: () => ({
    // your data
  }),
  action: {
    async logout() {
       // refresh token and clear from API

       post('logout')
     }
  },
})
{% endhighlight %}


Here, we subscribe to a logout message and monitor the data to check whether the published message is received or not.

In App.vue

{% highlight js %}
import { useAuthStore } from '@/stores/auth'
import { useBroadcastChannel } from '@vueuse/core'
import { watch } from 'vue'

const authStore = useAuthStore()

const { data, close } = useBroadcastChannel({ name: 'ibook-channel' })

const logout = async () => {
  try {
    
  } catch (e) {
    console.error(e)
  }
}

watch(data, () => {
  if (data.value == 'logout') {
    reloadNuxtApp()

    close()
  }
})

{% endhighlight %}

When using this approach, you will receive the published message, and the app will log out and reload all tabs.

That's it.
