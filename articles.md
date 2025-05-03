---
title: "Articles"
layout: home.njk
---

# All Articles

<ul>
{% for post in collections.articles %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a> — {{ post.date | date: "%B %d, %Y" }}
  </li>
{% endfor %}
</ul>