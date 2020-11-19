<template>
  <div class="my-card d-flex justify-content-left w-100">
    <img class="card-img col-12 col-md-3" :src="merchant.coverImageId" :alt="merchant.coverImageId">
    <div class="card-content">
      <!--   Row 1   -->
      <div class="d-flex align-items-center">
        <h5 class="card-title m-0 mr-2 text-dark">{{ merchant.shopNameTH }}</h5>
        <h5 v-if="merchant.isOpen === 'Y'" class="badge badge-success m-0">เปิดอยู่</h5>
        <h5 v-if="merchant.isOpen === 'N'" class="badge badge-secondary m-0">ปิดแล้ว</h5>
      </div>

      <!--   Row 2   -->
      <ul class="card-subtitle d-flex align-items-center p-0">
        <li class="">{{ merchant.subcategoryName }}</li>
        <li class="" v-if="merchant.priceLevel">
          <span :class="merchant.priceLevel >= 1 ? 'text-dark' : ''">฿</span>
          <span :class="merchant.priceLevel >= 2 ? 'text-dark' : ''">฿</span>
          <span :class="merchant.priceLevel >= 3 ? 'text-dark' : ''">฿</span>
          <span :class="merchant.priceLevel === 4 ? 'text-dark' : ''">฿</span>
        </li>
        <li class="">{{ merchant.addressDistrictName + ' ' + merchant.addressProvinceName }}</li>
      </ul>

      <p class="card-text" v-html="merchant.highlightText" />
      <p><strong>เมนูแนะนำ: </strong>{{ merchant.recommendedItems.join(', ') }}</p>
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

.card-subtitle li {
  display: inline;
}

.card-subtitle li+li:before {
  padding: 0 12px;
  content: "/\00a0";
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