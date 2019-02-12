<template>
  <div id="app">
    {{text | persianDigit}}
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      text: 'سلام این متن شامل اعداد تایپی برای وب بوده که برخی از فونت ها انهارا تبدیل نمیکنند و مشکلی که معمولا داریم این است که اعداد بصورت انگلیسی نشان داده میشوند و این باعث ظاهر بد نشوته میشود. مثلا فک کنید عدد 1234567890123478908655 رو در یک متن داریم.',
    }
  }
}
</script>

<style lang="scss"></style>