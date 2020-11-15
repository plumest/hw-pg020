<template>
  <div id="app">
    <div class="navbar bg-white d-flex justify-content-between align-items-center p-0">
      <div class="nav-brand px-3 px-md-4">
        <a href="/">
          <img class="d-none d-md-block" src="./assets/halfhalf-logo.png" alt="คนละครึ่ง">
          <img class="d-block d-md-none" src="./assets/halfhalf-logo-mini.png" alt="คนละครึ่ง">
        </a>
      </div>

      <div class="search-filter d-flex align-items-center mr-3 mr-md-4">
        <span id="nearby" class="px-2" onclick="handleFilterNearby()" >
          <div class="d-flex align-items-center">
            <div class="mr-5">
              <svg width="16" height="20" viewBox="0 0 14 20" class="mr-2" fill="currentColor">
                <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
              </svg>
              <span class="w-100">พื้นที่ใกล้ฉัน</span>
            </div>
            <svg id="arrow-down" width="12px" height="12px" viewBox="64 64 896 896" fill="rgba(0,0,0,.25)">
              <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"/>
            </svg>
          </div>
        </span>

        <div id="search">
          <input
              type="search"
              id="search-input"
              name="search"
              onkeyup="handleSearch()"
              autocomplete="off"
              maxlength="50"
              placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
          >
        </div>

        <span id="search-suffix">
          <div class="d-flex align-items-center">
            <span>
              <svg width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor">
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"/>
              </svg>
            </span>
          </div>
        </span>
      </div>
    </div>

    <ul class="breadcrumb px-3 px-md-4 d-flex justify-content-start align-items-center">
      <li><a href="https://search-merchant.xn--42caj4e6bk1f5b1j.com/">หน้าแรก</a></li>
      <li>ค้นหา</li>
    </ul>

  </div>
</template>

<script>
import axios from "axios";

const url = "https://panjs.com/ywc18.json";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export default {
  name: 'App',
  data() {
    return {
      data: {},
      searchedText: ""
    }
  },
  async mounted() {
    try {
      const response = await axios(proxyUrl + url);
      this.data = await response.data;
      console.log(this.data)
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    handleSearch(e) {
      this.searchedText = e.target.value
    },
    handleFilterNearby() {

    }
  },
  components: {

  }
}
</script>

<style>
#app {

}

.navbar {
  width: 100%;
  height: 60px;
}

.nav-brand {
  padding-top: 10px;
  padding-bottom: 10px;
  height: 60px
}

.nav-brand img {
  height: 40px;
}

.search-filter {
  flex: 1 1 0;
  align-items: center;
  box-sizing: border-box;
  box-shadow: black 0 0 1px;
  height: 2.5rem!important;
  border: 0 solid #e2e8f0;
  border-radius: 8px;
}

#nearby {
  flex: 1 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  line-height: 40px;
  color: rgba(0,0,0,.85);
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  border-right: 1px solid #d9d9d9;
}

#arrow-down {
  display: inline-block;
  text-rendering: optimizeLegibility;
  top: 53%;
  right: 11px;
  width: 12px;
  height: 12px;
  margin-top: 6px;
}

#nearby:hover {
  cursor: pointer;
}

#search {
  border: none;
  border-radius: 2px;
  outline: none;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  list-style: none;
  width: 100%;
  height: 40px;
  min-width: 0;
  margin: 0;
  padding: 0;
  color: rgba(0,0,0,.85);
  transition: all .3s;
}

#search-input {
  width: 100%;
  height: 40px;
  border: none;
}

#search-input:placeholder-shown {
  text-overflow: ellipsis;
}

#search-input::placeholder {
  color: #bebebe;
  padding-left: 12px;
}

#search-suffix {
  width: 62px;
  height: 40px;
  line-height: 40px;
  background-color: rgb(248, 248, 248);
}

#search-suffix:hover {
  cursor: pointer;
}

#search-suffix span {
  padding-left: 24px;
  padding-right: 24px;
}

/* Style the list */
ul.breadcrumb {
  color: white;
  background-color: rgb(39, 57, 124);
  list-style: none;
  width: 100%;
  height: 46px;
  margin: 0 auto;
  border: none;
  border-radius: unset;
}

/* Display list items side by side */
ul.breadcrumb li {
  display: inline;
}

/* Add a slash symbol (/) before/behind each list item */
ul.breadcrumb li+li:before {
  padding: 0 12px;
  content: "/\00a0";
}

ul.breadcrumb li a {
  color: white;
  text-decoration: underline;
}

ul.breadcrumb li:hover {
  cursor: text;
}

ul.breadcrumb li a:hover {
  cursor: pointer;
}
</style>
