---
title: "Reading Log"
layout: home.njk
---

### what i am reading now? {.hero-subtitle}

<ul>
{% for post in collections.articles %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a> — {{ post.date | date: "%B %d, %Y" }}
  </li>
{% endfor %}
</ul>