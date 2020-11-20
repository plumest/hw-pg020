<template>
  <div class="my-card d-flex justify-content-left flex-wrap w-100 mb-2" v-if="isDisplay && isDisplayByPriceFilter && isDisplayByPriceProvince">
    <div class="col-12 col-lg-3 p-0 p-lg-1">
      <div class="card-img" :style="bgImage" />
    </div>
    <div class="card-content col-12 col-lg-9 p-3">
      <!--   Row 1   -->
      <div class="d-flex align-items-center mb-2">
        <h5 class="card-title m-0 mr-2 text-dark">{{ merchant.shopNameTH }}</h5>
        <h5 v-if="merchant.isOpen === 'Y'" class="badge badge-success m-0">เปิดอยู่</h5>
        <h5 v-if="merchant.isOpen === 'N'" class="badge badge-secondary m-0">ปิดแล้ว</h5>
      </div>

      <!--   Row 2   -->
      <ul class="card-subtitle d-flex align-items-center flex-wrap p-0">
        <li class="">{{ merchant.subcategoryName }}</li>
        <li class="" v-if="merchant.priceLevel">
          <span :class="merchant.priceLevel >= 1 ? 'text-dark' : ''">฿</span>
          <span :class="merchant.priceLevel >= 2 ? 'text-dark' : ''">฿</span>
          <span :class="merchant.priceLevel >= 3 ? 'text-dark' : ''">฿</span>
          <span :class="merchant.priceLevel === 4 ? 'text-dark' : ''">฿</span>
        </li>
        <li class="">{{ merchant.addressDistrictName + ' ' + merchant.addressProvinceName }}</li>
      </ul>

      <div class="break-line" />

      <!--   Row 3   -->
      <p class="card-text mb-1" v-html="merchant.highlightText" />

      <!--   Row 4   -->
      <p class="mb-2"><strong>เมนูแนะนำ: </strong>{{ merchant.recommendedItems.join(', ') }}</p>

      <!--   Row 5   -->
      <div class="d-flex align-items-center">
        <img
            v-for="facility in merchant.facilities"
            class="card-icon"
            :src=" require(`@/assets/facilities/${facility}.png`)"
            :alt="facility"
            :key="facility"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    merchant: Object
  },
  data () {
    return {
      bgImage: {
        'background-image': `url(${this.merchant.coverImageId})`
      },
    }
  },
  computed: {
    categorySelected() {
      return this.$store.state.categorySelected.name
    },
    subCategorySelected() {
      return this.$store.state.subCategorySelected
    },
    provinceSelected() {
      return this.$store.state.provinceSelected
    },
    priceRangeSelected() {
      return this.$store.state.priceRange.indexOf(this.$store.state.priceRangeSelected) + 1
    },
    isDisplay() {
      if (this.categorySelected === 'ทั้งหมด') {
        return true
      } else if (this.categorySelected === 'ร้านอาหารและเครื่องดื่ม' && this.merchant.categoryName === 'ร้านอาหาร') {
        return this.subCategorySelected === 'ทั้งหมด' || this.subCategorySelected === this.merchant.subcategoryName
      } else if (this.categorySelected === 'สินค้าทั่วไป' && this.merchant.categoryName === 'แฟชั่น') {
        return this.subCategorySelected === 'ทั้งหมด' || this.subCategorySelected === this.merchant.subcategoryName
      } else if (this.categorySelected === 'สินค้าทั่วไป' && this.merchant.categoryName === 'งานบริการอื่นๆ / เบ็ดเตล็ด') {
        if (this.merchant.subcategoryName === 'สินค้า และ บริการ เกี่ยวกับการตกแต่งบ้าน') {
          return this.subCategorySelected === 'ทั้งหมด' || this.subCategorySelected === 'สินค้าเกี่ยวกับการตกแต่งบ้าน'
        }
        return this.subCategorySelected === 'ทั้งหมด' || this.subCategorySelected === this.merchant.subcategoryName
      } else {
        return false
      }
    },
    isDisplayByPriceFilter() {
      if (this.priceRangeSelected){
        return this.priceRangeSelected === this.merchant.priceLevel
      } else {
        return true
      }
    },
    isDisplayByPriceProvince() {
      if (this.provinceSelected === 'พื้นที่ใกล้ฉัน' || this.provinceSelected === 'สถานที่ทั้งหมด'){
        return true
      } else {
        return this.provinceSelected === this.merchant.addressProvinceName
      }
    }
  }
}
</script>

<style scoped>
.text-dark {
  color: rgb(34, 34, 34);
}

.my-card {
  color: #999999;
  background-color: white;
  border: 1px solid rgb(201, 225, 233);
}

strong {
  color: rgb(34, 34, 34);
}

.card-img {
  min-height: 14rem;
  background-color: rgb(236, 236, 236);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 2px;
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 991.98px) {
  .card-img {

  }
}

@media only screen and (min-width: 991.98px) {
  .card-img {

  }
}

.card-title {
  font-weight: 600;
  line-height: 1.65;
  display: inline-block;
  vertical-align: middle;
}

.card-subtitle {
  list-style: none;
  color: #999999;
}

.card-text >>> strong {
  color: rgb(34, 34, 34);
}

.card-subtitle li {
  display: inline;
  padding-right: 12px;
}

.card-subtitle li+li:before {
  padding-right: 12px;
  content: "|";
}

.break-line {
  width: 65%;
  height: 1px;
  background-color: rgb(238, 238, 238);
  margin: 18px 0;
}

.card-icon {
  margin-right: 6px;
  margin-bottom: 3px;
  padding: 5px;
  border-radius: 20px;
  border: 1px solid rgb(108, 191, 95);
  width: 30px;
  height: 30px;
}

</style>