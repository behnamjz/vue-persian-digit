# vue-persian-digit
this filter convert number in the text to persian number


## Installation

### Direct include

Simply include `vue-persian-digit` after Vue and it will install itself automatically:

```html
<script src="vue.js"></script>
<script src="vue-persian-digit.min.js"></script>
```

### NPM

```
npm install vue-persian-digit --save
```

When used with a module system, you must explicitly install the filters via `Vue.use()`:

```js
import Vue from 'vue'
import VuePersianDigit from 'vue-persian-digit'

// Vue.install(VuePersianDigit); // Vue V1 
Vue.use(VuePersianDigit);        // Vue V2
```


### How To Use?

+ Example:

  ```js
  {{ msg | persianDigit }} // 'سلام این متن شامل اعداد بصورت انگلیسی میباشد. برای مثال شما عدد 1234567890 رو در نظر بگیرید.' => 'سلام این متن شامل اعداد بصورت انگلیسی میباشد. برای مثال شما عدد ۱۲۳۴۵۶۷۸۹۰ رو در نظر بگیرید.'
