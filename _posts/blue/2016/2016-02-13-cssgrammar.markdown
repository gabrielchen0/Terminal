---
layout: blue
title: "CSS Basic Grammar"
subtitle: "I want to put these basic grammar all together here. To make things more convenient."
date: 2016-02-13
author: Benjamin
category: blue
finished: true
---

## CSS

Stands for Cascading Style Sheets. Used to describe HTML elements styles. 

{% highlight css %}
h1 {
  color: red;
}
{% endhighlight %}

## Style

Style sheets are typically written in a separate file, but you can also apple styles directly in your HTML. To do so, you can use the `style` attribute. 

But style attribute can only be applied to individual elements. 

{% highlight html %}
<body>
  <h1 style="color: red">
    Site Name
  </h1>
</body>
{% endhighlight %}

## Link

Link your CSS file. 

{% highlight html %}
<head>
  <link rel="stylesheet"
    type="text/css"
    href="/styles.css">
</head>
{% endhighlight %}

## Selectors

Choose and style specific HTML elements. 

Selectors find HTML elements based on ID, class, element name and more. 

Using `*` to select all elements. 

{% highlight css %}
* {
  color: #;
}
{% endhighlight %}

**Color**

There are three ways to represent a color in CSS. 

* Hexadecimal: #2F9C0A -- six digit alpha-numeric combination

* RGB: 201, 44, 44 -- each color component can take values between 0-255, the higher the value, the more prominent the color 

* Default: Green -- apply a default green color

**Pixels**

Meassuring your browser elements. 

**Class**

The syntax is `.classname` in your CSS file when using class selectors. 

{% highlight html %}
<div class="header">
{% endhighlight %}

{% highlight css %}
.header {
  color: #;
}
{% endhighlight %}

**IDs**

If you assign an ID attribute in your HTML file, then that is applied to a single element. 

Using the syntax `#diname` to declare an ID selector. 

{% highlight html %}
<div id="title">
{% endhighlight %}

{% highlight css %}
#title {
  color: #;
}
{% endhighlight %}

**Psuedo classes**

Be used when styles change due to an action occuring. 

Using `action` selector to show how a link color changes from blue to purple once clicked: 

{% highlight html %}
<a href="http://">
{% endhighlight %}

{% highlight css %}
a:active {
  color: purple;
}
{% endhighlight %}

## Properties

Define the styles being applied to the selector. 

Selectors can hold multiple properties. 

{% highlight css %}
h2 {
  color: #;
  font-size: 10px;
}
{% endhighlight %}

All properties need assigned values. It is necessary to add a semicolon after each propery-value pair. 

**Font**

Set the size and type of font for your element. 

{% highlight css %}
h1 {
  font: 15px Chalkduster;
}
{% endhighlight %}

**Background-color**

Add a color to the background of an element. 

{% highlight css %}
h1 {
  background-color: green;
}
{% endhighlight %}

**Width & Height**

Provides a fixed width and height to an element. 

{% highlight css %}
img {
  height: 30px;
  width: 50px;
}
{% endhighlight %}

## Spacing

The CSS box modle consists `margins`, `borders`, `padding`, `content`. 

This model gives every HTML element a `margin`, `border`, `padding` and `content`. 

**Margin**

The first layer. If you have a margin of 10px there will be 10px of spacing on the left, right, to and bottom of your content. 

{% highlight html %}
<body>
  <div id="box"></div>
</body>
{% endhighlight %}

{% highlight css %}
#box {
  height: 50px;
  width: 50px;
  border: 1px solid red;
  margin: 10px;
}
{% endhighlight %}

`margin` applies a margin to all sides of your content. You can also specify margins separately with margin-right, margin-left, top & bottom. 

Margins can also have negative values. 

**Border**

Border property takes three values: thickness, type & color. 

`border: 1px solid red;` 

`border: 1px dashed blue;`

*Border-radius*

Defines how rounded the corners of your border are. 

`border-radius: 4px;`

**Padding**

Adds space between the content and the border. 

`padding: 20px;`

**Content**

Content can be images, text or anything else you want to add on your web pages.

{% highlight html %}
<body>
  <div>
  Content
  </div>
</bode>
{% endhighlight %}

{% highlight css %}
div {
  height: 50px;
  width: 50px;
  border-radius: 4px;
  border: 1px solid red;
  margin: 10px;
  padding:15px; 
}
{% endhighlight %}

## Positioning

How to organize & position the different sections of your website. 

**Containers**

How you section off portions of your website. 

Such as `div` is a container. 

{% highlight css %}
div {
  background-color: #eeeeee;
  height: 50px;
  width: 50px;
}
{% endhighlight %}

**Display**

Display property allows you to create containers with a single value. 

`display: block;`

*block* : creates a square block that takes up the full width of the browser. Be used to organize a blank web page. 

*inline-block* : organizes your boxes horizontally. 

*inline* : puts your elements on the same line. When inline is applied elements lose their dimensions. 

*none* : removes its associated elements from the web page. 

**Float**

Places an element in a relative position on your browser. You can set float to right, left or center.

**Position**

Position can be static, fixed, relative & absolute. 

*static* : default position property. If you do not assign a position then the element paces itself wherever it wants. 

*absolute* : places the element based upon the position of the parent element. 

*relative* : places elements based on the static position it would otherwise take. 

*fixed* : keeps an element in the place. Even if you scroll the element will stay put. 


