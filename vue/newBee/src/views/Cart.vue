<template>
  <div class="cart-box">
    <SimpleHeader title="购物车" :back="false" />

    <div class="cart-body">
      <van-checkbox-group v-model="result" @change="groupChange">
        <van-swipe-cell v-for="item in list" :key="item.goodsId">
          <van-checkbox :name="item.cartItemId"></van-checkbox>
          <van-card 
          :num="item.goodsCount" 
          :price="item.sellingPrice" 
          :title="item.goodsName" 
          class="goods-card"
            :thumb="item.goodsCoverImg">
            <template #footer>
              <van-stepper v-model="value" min="1" max="5" @change="numChange" />
            </template>
          </van-card>
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>

    <!-- submit -->
    

    <NavBar />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import SimpleHeader from '../components/SimpleHeader.vue';
import { getCart } from '@/api/cart.js'
import { ref } from 'vue';
import { onMounted } from 'vue';

const result = ref([])
const list = ref([])

onMounted(async () => {
  const { data } = await getCart({ pageNumber: 1 });
  console.log(data);
  list.value=data;
  result.value=data.map(item => item.cartItemId);
})

const groupChange = () => {
  console.log(result.value)
}

const numChange = () => {

}
</script>

<style lang="less" scoped>
.cart-body {
  margin: 16px 0 100px 0;
  padding-left: 10px;
}
</style>
<style>
.van-swipe-cell__wrapper {
  display: flex;
}

.van-card.goods-card {
  width: 100%;
  background-color: #fff;
}

.van-checkbox {
  width: 22px;
}

.delete-button {
  height: 100%;
}

.van-card__footer {
  position: absolute;
  right: 16px;
  bottom: 8px;
}

.van-card__num {
  position: absolute;
  right: 0;
  top: 0;
}
</style>