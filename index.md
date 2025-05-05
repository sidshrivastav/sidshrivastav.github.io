---
layout: home.njk
title: siddhant shrivastav
---

# siddhant shrivastav [about me](/about){.about-me-nav}

## recent learnings <a href="/articles" class="about-me-nav">read more</a> {.hero-subtitle}

<ul>
{% assign recentArticles = collections.articles | slice: 0, 3 %}
{% for post in recentArticles %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a> — {{ post.date | date: "%B %d, %Y" }}
  </li>
{% endfor %}
</ul>


<!-- #### recent writings -->
## recent readings {.hero-subtitle}

{% for book in reading.current %}
- Currently Reading: **{{ book.title }}** by *{{ book.author }}*
{% endfor %}
{% for book in reading.read %}
- **{{ book.title }}** by *{{ book.author }}*, *{{ book.month}}, {{book.year}}*
{% endfor %}