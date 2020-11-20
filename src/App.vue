<template>
  <div id="app">
    <div class="position-relative">
      <div class="navbar bg-white d-flex justify-content-center align-items-center p-0 mx-xl-5" style="max-width: 1280px">
        <div class="nav-brand px-3 px-md-4">
          <a href="/">
            <img class="d-none d-md-block" src="./assets/halfhalf-logo.png" alt="คนละครึ่ง">
            <img class="d-block d-md-none" src="./assets/halfhalf-logo-mini.png" alt="คนละครึ่ง">
          </a>
        </div>

        <div class="search-filter d-flex align-items-center mr-3 mr-md-4">
          <!--     จังหวัด/ใกล้ฉัน     -->
          <div class="nearby-dropdown-wrapper d-none d-md-block">
            <div class="nearby-dropdown-selector">
                <span>
                  <input
                      class="dropbtn"
                      type="search"
                      :value="provinceSelected"
                      readonly
                      autocomplete="off"
                  >
                </span>
              <span class="nearby-dropdown-selected">
                  <svg v-if="provinceSelected === 'พื้นที่ใกล้ฉัน'" width="16" height="20" viewBox="0 0 14 20" class="mr-2" fill="currentColor">
                    <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                  </svg>
                  <svg v-if="provinceSelected === 'สถานที่ทั้งหมด'" width="20" height="30" viewBox="0 0 25 30" fill="none" style="margin-right: 6px;">
                    <path d="M9 22l-.371.335.371.411.371-.41L9 22zm0 0l.371.335h0l.002-.002.004-.005.016-.017a4.45 4.45 0 00.02-.023l.04-.045c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297C16.032 11.957 16.5 10.413 16.5 9c0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 001.5 9c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.449 4.298a46.985 46.985 0 003.521 4.563l.016.017.004.005.001.002h0L9 22zm0-11a2 2 0 110-4 2 2 0 010 4z" fill="#222" stroke="#fff"></path>
                    <path d="M16 28l-.371.335.371.411.371-.41L16 28zm0 0l.371.335h0l.002-.002.004-.005.016-.017a3.037 3.037 0 00.06-.068c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297.669-1.494 1.137-3.037 1.137-4.451 0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 008.5 15c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.448 4.298a46.982 46.982 0 003.522 4.563l.016.017.004.005.001.002h0L16 28zm0-11a2 2 0 110-4 2 2 0 010 4z" fill="#222" stroke="#fff"></path>
                  </svg>
                  {{ provinceSelected }}
                  <svg viewBox="64 64 896 896" focusable="false" class="dropdown-icon" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  </svg>
                </span>
            </div>
            <div class="nearby-dropdown-content">
              <div @click="handleProvinceSelected('พื้นที่ใกล้ฉัน')" :class="provinceSelected === 'พื้นที่ใกล้ฉัน' ? 'selected-item' : ''">
                <svg width="16" height="20" viewBox="0 0 14 20" class="mr-2" fill="currentColor">
                  <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                </svg>พื้นที่ใกล้ฉัน
              </div>

              <div @click="handleProvinceSelected('สถานที่ทั้งหมด')" :class="provinceSelected === 'สถานที่ทั้งหมด' ? 'selected-item' : ''">
                <svg v-if="provinceSelected === 'สถานที่ทั้งหมด'" width="20" height="30" viewBox="0 0 25 30" fill="none" style="margin-right: 6px;">
                  <path d="M9 22l-.371.335.371.411.371-.41L9 22zm0 0l.371.335h0l.002-.002.004-.005.016-.017a4.45 4.45 0 00.02-.023l.04-.045c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297C16.032 11.957 16.5 10.413 16.5 9c0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 001.5 9c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.449 4.298a46.985 46.985 0 003.521 4.563l.016.017.004.005.001.002h0L9 22zm0-11a2 2 0 110-4 2 2 0 010 4z" fill="#222" stroke="#fff"></path>
                  <path d="M16 28l-.371.335.371.411.371-.41L16 28zm0 0l.371.335h0l.002-.002.004-.005.016-.017a3.037 3.037 0 00.06-.068c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297.669-1.494 1.137-3.037 1.137-4.451 0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 008.5 15c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.448 4.298a46.982 46.982 0 003.522 4.563l.016.017.004.005.001.002h0L16 28zm0-11a2 2 0 110-4 2 2 0 010 4z" fill="#222" stroke="#fff"></path>
                </svg>สถานที่ทั้งหมด
              </div>

              <div
                  v-for="province in provinces"
                  :key="province"
                  :class="provinceSelected === provinces ? 'selected-item' : ''"
                  @click="handleProvinceSelected(province)"
              >
                {{ province }}
              </div>
            </div>
          </div>

            <div id="search">
              <input
                  type="search"
                  id="search-input"
                  name="search"
                  @keyup.enter.prevent="handleSearch()"
                  v-model="searchedText"
                  autocomplete="off"
                  maxlength="50"
                  placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
              >
            </div>

            <span id="search-suffix" @click="handleSearch()">
              <div class="d-flex align-items-center">
                <span>
                  <svg width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor">
                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"/>
                  </svg>
                </span>
              </div>
            </span>
        </div>

        <div class="mr-3">
          <img
              class="filter-btn d-block d-md-none"
              src="./assets/filter.png"
              alt="filter"
              style="height: 20px; cursor: pointer"
              @click="handleActiveFilter()"
          >
        </div>

      <!--    Active Filter    -->
        <div class="active-filter" :class="isFilterActive ? 'd-block' : 'd-none'">
          <!--     Top     -->
          <div class="active-filter-top d-flex justify-content-center align-items-center">
            <div class="active-filter-logo" @click="handleActiveFilter()">
              <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
              </svg>
            </div>
            กรอกผล
          </div>
          <!--     Top     -->
          <div class="bg-white p-3">
            <!--      ประเภทร้าน      -->
            <div class="filter-title">ประเภทร้านค้า</div>
            <div class="mt-3 mb-4">
              <label class="choice">ทั้งหมด
                <input type="radio" value="ทั้งหมด" id="ทั้งหมด" v-model="categorySelectedName">
                <span class="checkmark"></span>
              </label>

              <label class="choice" v-for="category in categories" :key="category.name">{{ category.name }}
                <input type="radio" :value="category.name" :id="category.name" v-model="categorySelectedName">
                <span class="checkmark"></span>
              </label>
            </div>

            <!--      จังหวัด/ใกล้ฉัน      -->
            <div class="filter-title">จังหวัด/ใกล้ฉัน</div>
            <div class="dropdown-wrapper mb-4">
              <div class="dropdown-selector">
                <span>
                  <input
                      class="dropbtn"
                      type="search"
                      :value="provinceSelected"
                      readonly
                      autocomplete="off"
                  >
                </span>
                <span class="dropdown-selected">
                  <svg v-if="provinceSelected === 'พื้นที่ใกล้ฉัน'" width="16" height="20" viewBox="0 0 14 20" class="mr-2" fill="currentColor">
                    <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                  </svg>
                  <svg v-if="provinceSelected === 'สถานที่ทั้งหมด'" width="20" height="30" viewBox="0 0 25 30" fill="none" style="margin-right: 6px;">
                    <path d="M9 22l-.371.335.371.411.371-.41L9 22zm0 0l.371.335h0l.002-.002.004-.005.016-.017a4.45 4.45 0 00.02-.023l.04-.045c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297C16.032 11.957 16.5 10.413 16.5 9c0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 001.5 9c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.449 4.298a46.985 46.985 0 003.521 4.563l.016.017.004.005.001.002h0L9 22zm0-11a2 2 0 110-4 2 2 0 010 4z" fill="#222" stroke="#fff"></path>
                    <path d="M16 28l-.371.335.371.411.371-.41L16 28zm0 0l.371.335h0l.002-.002.004-.005.016-.017a3.037 3.037 0 00.06-.068c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297.669-1.494 1.137-3.037 1.137-4.451 0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 008.5 15c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.448 4.298a46.982 46.982 0 003.522 4.563l.016.017.004.005.001.002h0L16 28zm0-11a2 2 0 110-4 2 2 0 010 4z" fill="#222" stroke="#fff"></path>
                  </svg>
                  {{ provinceSelected }}
                  <svg viewBox="64 64 896 896" focusable="false" class="dropdown-icon" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  </svg>
                </span>
              </div>
              <div class="dropdown-content">
                <div @click="handleProvinceSelected('พื้นที่ใกล้ฉัน')" :class="provinceSelected === 'พื้นที่ใกล้ฉัน' ? 'selected-item' : ''">
                  <svg width="16" height="20" viewBox="0 0 14 20" class="mr-2" fill="currentColor">
                    <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                  </svg>พื้นที่ใกล้ฉัน
                </div>

                <div @click="handleProvinceSelected('สถานที่ทั้งหมด')" :class="provinceSelected === 'สถานที่ทั้งหมด' ? 'selected-item' : ''">
                  <svg v-if="provinceSelected === 'สถานที่ทั้งหมด'" width="20" height="30" viewBox="0 0 25 30" fill="none" style="margin-right: 6px;">
                    <path d="M9 22l-.371.335.371.411.371-.41L9 22zm0 0l.371.335h0l.002-.002.004-.005.016-.017a4.45 4.45 0 00.02-.023l.04-.045c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297C16.032 11.957 16.5 10.413 16.5 9c0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 001.5 9c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.449 4.298a46.985 46.985 0 003.521 4.563l.016.017.004.005.001.002h0L9 22zm0-11a2 2 0 110-4 2 2 0 010 4z" fill="#222" stroke="#fff"></path>
                    <path d="M16 28l-.371.335.371.411.371-.41L16 28zm0 0l.371.335h0l.002-.002.004-.005.016-.017a3.037 3.037 0 00.06-.068c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297.669-1.494 1.137-3.037 1.137-4.451 0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 008.5 15c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.448 4.298a46.982 46.982 0 003.522 4.563l.016.017.004.005.001.002h0L16 28zm0-11a2 2 0 110-4 2 2 0 010 4z" fill="#222" stroke="#fff"></path>
                  </svg>สถานที่ทั้งหมด
                </div>

                <div
                    v-for="province in provinces"
                    :key="province"
                    :class="provinceSelected === provinces ? 'selected-item' : ''"
                    @click="handleProvinceSelected(province)"
                >
                  {{ province }}
                </div>
              </div>
            </div>

            <!--      ราคา      -->
            <div class="filter-title">ราคา</div>
            <div class="dropdown-wrapper mb-4">
              <div class="dropdown-selector">
                <span>
                  <input
                      class="dropbtn"
                      type="search"
                      :value="priceRangeSelected"
                      readonly
                      autocomplete="off"
                  >
                </span>
                <span class="dropdown-selected" :class="priceRangeSelected === 'กรุณาเลือกราคา' ? 'text-gray' : ''">{{ priceRangeSelected }}
                  <svg viewBox="64 64 896 896" focusable="false" class="dropdown-icon" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  </svg>
                </span>
              </div>
              <div class="dropdown-content">
                <div @click="handlePriceChange('กรุณาเลือกราคา')" :class="priceRangeSelected === 'กรุณาเลือกราคา' ? 'selected-item' : ''">กรุณาเลือกราคา</div>
                <div
                    v-for="price in priceRange"
                    :key="price"
                    :class="priceRangeSelected === price ? 'selected-item' : ''"
                    @click="handlePriceChange(price)"
                >
                  {{ price }}
                </div>
              </div>
            </div>

            <!--      subCategories      -->
            <div v-if="categorySelected.subcategories.length" class="filter-title">ประเภท{{ categorySelected.name }}</div>
            <div v-if="categorySelected.subcategories.length" class="mt-3">
              <label class="choice">ทั้งหมด
                <input type="radio" value="ทั้งหมด" id="หมวดหมู่ย่อยทั้งหมด" v-model="subCategorySelected">
                <span class="checkmark"></span>
              </label>

              <label class="choice" v-for="subcategory in categorySelected.subcategories" :key="subcategory">{{ subcategory }}
                <input type="radio" :value="subcategory" :id="subcategory" v-model="subCategorySelected">
                <span class="checkmark"></span>
              </label>
            </div>

          </div>
        </div>
      <!--    Active Filter    -->
      </div>
    </div>

    <ul class="breadcrumb px-3 px-md-4 d-flex justify-content-start align-items-center">
      <li><a href="/">หน้าแรก</a></li>
      <li>ค้นหา</li>
    </ul>

    <div class="container-fluid my-container">
      <div class="px-3 py-4">
        <h5 class="mb-4" style="letter-spacing: -0.02em; font-weight: 600">
          ผลการค้นหา <span v-if="categorySelectedName !== 'ทั้งหมด'">{{ categorySelectedName }}</span> ทั้งหมด
        </h5>
      </div>

      <div class="d-flex justify-content-center pb-4">
        <div class="filter-wrapper d-none d-md-block">
          <div class="bg-white p-3">
            <!--      ประเภทร้าน      -->
            <div class="filter-title">ประเภทร้านค้า</div>
            <div class="mt-3 mb-4">
              <label class="choice">ทั้งหมด
                <input type="radio" value="ทั้งหมด" id="ทั้งหมด" v-model="categorySelectedName">
                <span class="checkmark"></span>
              </label>

              <label class="choice" v-for="category in categories" :key="category.name">{{ category.name }}
                <input type="radio" :value="category.name" :id="category.name" v-model="categorySelectedName">
                <span class="checkmark"></span>
              </label>
            </div>

            <!--      จังหวัด/ใกล้ฉัน      -->
            <div class="filter-title">จังหวัด/ใกล้ฉัน</div>
            <div class="dropdown-wrapper mb-4">
              <div class="dropdown-selector">
                <span>
                  <input
                      class="dropbtn"
                      type="search"
                      :value="provinceSelected"
                      readonly
                      autocomplete="off"
                  >
                </span>
                <span class="dropdown-selected">
                  <svg v-if="provinceSelected === 'พื้นที่ใกล้ฉัน'" width="16" height="20" viewBox="0 0 14 20" class="mr-2" fill="currentColor">
                    <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                  </svg>
                  <svg v-if="provinceSelected === 'สถานที่ทั้งหมด'" width="20" height="30" viewBox="0 0 25 30" fill="none" style="margin-right: 6px;">
                    <path d="M9 22l-.371.335.371.411.371-.41L9 22zm0 0l.371.335h0l.002-.002.004-.005.016-.017a4.45 4.45 0 00.02-.023l.04-.045c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297C16.032 11.957 16.5 10.413 16.5 9c0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 001.5 9c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.449 4.298a46.985 46.985 0 003.521 4.563l.016.017.004.005.001.002h0L9 22zm0-11a2 2 0 110-4 2 2 0 010 4z" fill="#222" stroke="#fff"></path>
                    <path d="M16 28l-.371.335.371.411.371-.41L16 28zm0 0l.371.335h0l.002-.002.004-.005.016-.017a3.037 3.037 0 00.06-.068c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297.669-1.494 1.137-3.037 1.137-4.451 0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 008.5 15c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.448 4.298a46.982 46.982 0 003.522 4.563l.016.017.004.005.001.002h0L16 28zm0-11a2 2 0 110-4 2 2 0 010 4z" fill="#222" stroke="#fff"></path>
                  </svg>
                  {{ provinceSelected }}
                  <svg viewBox="64 64 896 896" focusable="false" class="dropdown-icon" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  </svg>
                </span>
              </div>
              <div class="dropdown-content">
                <div @click="handleProvinceSelected('พื้นที่ใกล้ฉัน')" :class="provinceSelected === 'พื้นที่ใกล้ฉัน' ? 'selected-item' : ''">
                  <svg width="16" height="20" viewBox="0 0 14 20" class="mr-2" fill="currentColor">
                    <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                  </svg>พื้นที่ใกล้ฉัน
                </div>

                <div @click="handleProvinceSelected('สถานที่ทั้งหมด')" :class="provinceSelected === 'สถานที่ทั้งหมด' ? 'selected-item' : ''">
                  <svg v-if="provinceSelected === 'สถานที่ทั้งหมด'" width="20" height="30" viewBox="0 0 25 30" fill="none" style="margin-right: 6px;">
                    <path d="M9 22l-.371.335.371.411.371-.41L9 22zm0 0l.371.335h0l.002-.002.004-.005.016-.017a4.45 4.45 0 00.02-.023l.04-.045c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297C16.032 11.957 16.5 10.413 16.5 9c0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 001.5 9c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.449 4.298a46.985 46.985 0 003.521 4.563l.016.017.004.005.001.002h0L9 22zm0-11a2 2 0 110-4 2 2 0 010 4z" fill="#222" stroke="#fff"></path>
                    <path d="M16 28l-.371.335.371.411.371-.41L16 28zm0 0l.371.335h0l.002-.002.004-.005.016-.017a3.037 3.037 0 00.06-.068c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297.669-1.494 1.137-3.037 1.137-4.451 0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 008.5 15c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.448 4.298a46.982 46.982 0 003.522 4.563l.016.017.004.005.001.002h0L16 28zm0-11a2 2 0 110-4 2 2 0 010 4z" fill="#222" stroke="#fff"></path>
                  </svg>สถานที่ทั้งหมด
                </div>

                <div
                    v-for="province in provinces"
                    :key="province"
                    :class="provinceSelected === provinces ? 'selected-item' : ''"
                    @click="handleProvinceSelected(province)"
                >
                  {{ province }}
                </div>
              </div>
            </div>

            <!--      ราคา      -->
            <div class="filter-title">ราคา</div>
            <div class="dropdown-wrapper mb-4">
              <div class="dropdown-selector">
                <span>
                  <input
                      class="dropbtn"
                      type="search"
                      :value="priceRangeSelected"
                      readonly
                      autocomplete="off"
                  >
                </span>
                <span class="dropdown-selected" :class="priceRangeSelected === 'กรุณาเลือกราคา' ? 'text-gray' : ''">{{ priceRangeSelected }}
                  <svg viewBox="64 64 896 896" focusable="false" class="dropdown-icon" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  </svg>
                </span>
              </div>
              <div class="dropdown-content">
                <div @click="handlePriceChange('กรุณาเลือกราคา')" :class="priceRangeSelected === 'กรุณาเลือกราคา' ? 'selected-item' : ''">กรุณาเลือกราคา</div>
                <div
                    v-for="price in priceRange"
                    :key="price"
                    :class="priceRangeSelected === price ? 'selected-item' : ''"
                    @click="handlePriceChange(price)"
                >
                  {{ price }}
                </div>
              </div>
            </div>

            <!--      subCategories      -->
            <div v-if="categorySelected.subcategories.length" class="filter-title">ประเภท{{ categorySelected.name }}</div>
            <div v-if="categorySelected.subcategories.length" class="mt-3">
              <label class="choice">ทั้งหมด
                <input type="radio" value="ทั้งหมด" id="หมวดหมู่ย่อยทั้งหมด" v-model="subCategorySelected">
                <span class="checkmark"></span>
              </label>

              <label class="choice" v-for="subcategory in categorySelected.subcategories" :key="subcategory">{{ subcategory }}
                <input type="radio" :value="subcategory" :id="subcategory" v-model="subCategorySelected">
                <span class="checkmark"></span>
              </label>
            </div>

          </div>
        </div>

        <div class="shop-container col-12 col-md-8">
          <Card
              v-for="merchant in merchants"
              :key="merchant.shopNameTH"
              :merchant="merchant"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: 'App',
  data() {
    return {
      isFilterActive: false
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories
    },
    provinces() {
      return this.$store.state.provinces
    },
    priceRange() {
      return this.$store.state.priceRange
    },
    merchants() {
      return this.$store.state.merchants
    },
    categorySelectedName: {
      get() {
        return this.$store.state.categorySelected.name
      },
      set(value) {
        let data = {name: 'ทั้งหมด', subcategories: []}
        if (value !== 'ทั้งหมด') {
          this.$store.state.categories.filter(category => {
            if (category.name === value) {
              data = category
            }
          })
        }
        this.$store.commit("setCategorySelected", data);
      }
    },
    categorySelected() {
      return this.$store.state.categorySelected
    },
    subCategorySelected: {
      get() {
        return this.$store.state.subCategorySelected;
      },
      set(value) {
        this.$store.commit("setSubCategorySelected", value);
      }
    },
    provinceSelected() {
      return this.$store.state.provinceSelected
    },
    priceRangeSelected() {
      return this.$store.state.priceRangeSelected
    },
    searchedText: {
      get() {
        return this.$store.state.searchedText;
      },
      set(value) {
        this.$store.commit("setSearchedText", value);
      }
    }
  },
  mounted() {
    this.$store.dispatch('loadData')
  },
  methods: {
    handleSearch() {
      this.serach = this.searchedText
    },
    handleActiveFilter() {
      document.body.classList.toggle('stop-scrolling')
      this.isFilterActive = !this.isFilterActive
    },
    handleProvinceSelected(value) {
      this.$store.dispatch('setProvinceSelected', value)
    },
    handlePriceChange(value) {
      this.$store.dispatch('setPriceRangeSelected', value)
    }
  },
  components: {
    Card
  }
}
</script>

<style>
#app {

}

.text-gray {
  color: #999999;
}

.my-container {
  min-height: 100vh;
  background-image: url("./assets/result-bg.png");
  background-position: center center;
  background-attachment: fixed;
  /*background-repeat: no-repeat;*/
  background-size: cover;
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
  max-width: 1000px;
  height: 2.5rem!important;
  border: 0 solid #e2e8f0;
  border-radius: 8px;
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

ul.breadcrumb li {
  display: inline;
}

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

.filter-wrapper {
  width: 350px;
  height: 100%;
  border: 1px solid rgba(160,174,192);
}

.filter-title {
  font-size: 1.1em;
  font-weight: 600;
}

.choice {
  display: block;
  position: relative;
  cursor: pointer;
  padding-left: 25px;
}

.choice input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 100px;
}

.choice:hover input ~ .checkmark {
  border-color: #1890ff;
}

.choice input:checked ~ .checkmark {
  border-color: #1890ff;
  background-color: white;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.choice input:checked ~ .checkmark:after {
  display: block;
}

.choice .checkmark:after {
  left: 3px;
  top: 3px;
  background-color: #1890ff;
  width: 8px;
  height: 8px;
  border-radius: 100%;
}

.dropdown-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 32px;
  border: 1px solid #888888;
}

.dropdown-wrapper:hover {
  cursor: pointer;
  border: 1px solid #40a9ff;
}

.dropbtn {
  color: white;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 100%;
  max-height: 256px;
  overflow-y: scroll;
  top: 32px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content div {
  color: black;
  height: 32px;
  line-height: 32px;
  padding-left: 12px;
  text-decoration: none;
  display: block;
}

.dropdown-content div:hover {
  background-color: #f1f1f1
}

.dropdown-content .selected-item {
  background-color: rgba(24, 144, 255, .2);
}

.dropdown-content .selected-item:hover {
  background-color: rgba(24, 144, 255, .2);
}

.dropdown-wrapper:hover .dropdown-content {
  display: block;
}

.dropdown-selector {
  position: relative;
}

.dropdown-selected {
  position: absolute;
  left: 11px;
  top: 0;
  line-height: 32px;
  width: calc(100% - 11px);
  height: 32px;
  text-align: left;
}

.dropdown-selected .dropdown-icon {
  position: absolute;
  top: 53%;
  right: 11px;
  width: 12px;
  height: 12px;
  margin-top: -6px;
  color: rgba(0,0,0,.25);
  font-size: 12px;
}

/* Nav dropdown */
.nearby-dropdown-wrapper {
  flex: 1 1;
  position: relative;
  display: inline-block;
  height: 40px;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  border-right: 1px solid #d9d9d9;
}

.nearby-dropdown-wrapper:hover {
  cursor: pointer;
}

.dropbtn {
  color: white;
  border: none;
  cursor: pointer;
}

.nearby-dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 100%;
  max-height: 256px;
  overflow-y: scroll;
  top: 40px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  z-index: 1;
}

.nearby-dropdown-content div {
  color: black;
  height: 32px;
  line-height: 32px;
  padding-left: 12px;
  text-decoration: none;
  display: block;
}

.nearby-dropdown-content div:hover {
  background-color: #f1f1f1
}

.nearby-dropdown-content .selected-item {
  background-color: rgba(24, 144, 255, .2);
}

.nearby-dropdown-content .selected-item:hover {
  background-color: rgba(24, 144, 255, .2);
}

.nearby-dropdown-wrapper:hover .nearby-dropdown-content {
  display: block;
}

.nearby-dropdown-selector {
  position: relative;
}

.nearby-dropdown-selected {
  position: absolute;
  left: 11px;
  top: 0;
  line-height: 40px;
  width: calc(100% - 11px);
  height: 40px;
  text-align: left;
}

.nearby-dropdown-selected .dropdown-icon {
  position: absolute;
  top: 53%;
  right: 11px;
  width: 12px;
  height: 12px;
  margin-top: -6px;
  color: rgba(0,0,0,.25);
  font-size: 12px;
}

.stop-scrolling {
  height: 100%;
  overflow: hidden;
}

.active-filter {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: white;
}

.active-filter-top {
  color: white;
  background-color: #2A4365;
  font-size: 24px;
  font-weight: 600;
  height: 64px;
}

.active-filter-logo {
  cursor: pointer;
  position: absolute;
  left: 24px;
}
</style>
