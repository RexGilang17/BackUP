<template>
  <div class="d-flex Card">
    <div class="card bg-warning jlmh-kk mr-5">
      <div class="card-body">
        <div>
          <span>Jumlah Kartu Keluarga</span>
          <div class="img-card">
            <p><img src="@/assets/img/card-checklist.svg" alt="" />10</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card bg-primary jlmh-seluruh-warga">
      <div class="card-body">
        <div>
          <span>Jumlah Seluruh Warga</span>
          <div class="img-card">
            <p><img src="@/assets/img/people-fill.svg" alt="" />10</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardComponent",
};
</script>

<style scoped>
.Card {
  margin-top: 80px;
  /* margin-left: 300px; */
}
.card {
  width: 40%;
}
.img-card {
  font-size: 60px;
  text-align: center;
}
img {
  width: 20%;
  margin-right: 10px;
}
.card-body {
  font-size: 30px;
}
/* .jlmh-kk {
  width: 200px;
} */
</style>
