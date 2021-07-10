<template>
<div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
  </router-view>
</div>
</template>


<script>
export default {
    created() {
    let vm = this;

    let btn = document.getElementsByClassName('app-add-item');

    btn.forEach(function(newBtn){
      newBtn.addEventListener('click', () => {
      const itemName = newBtn.getAttribute('data-item-name')
      const itemPrice = newBtn.getAttribute('data-item-price')
      const itemId = newBtn.getAttribute('data-item-id')
      const itemImg = newBtn.getAttribute('data-item-image')

      let productItem = {itemName, itemPrice, itemId, itemImg, itemQty: 1, itemTotalPrice:itemPrice}

      const cartItems = vm.$store.getters.cart
          
      const found = cartItems.some(el => el.itemId === productItem.itemId)

      if(found){
        vm.$store.commit('incrementItemQuantity',productItem )
      }else {
        vm.$store.commit('addItemToCart',productItem )
      }

      vm.$store.commit('openModal')
      
      })
    })

  }
}
</script>