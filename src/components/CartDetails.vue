<template>
    <div>
        <div v-for="item in items" :key="item.id">
        <div class="flex hover:bg-gray-100 -mx-8 px-6 py-5 border-b">
          <div class="flex w-1/4"> 
            <div class="w-20">
              <img class="h-24" :src="item.itemImg" alt="">
            </div>
          </div>
            <div class="flex flex-col justify-between ml-4 flex-grow  w-2/4">
              <div>
              <div class="font-bold text-sm">{{item.itemName}}</div>
              <div class="text-xs text-gray-500">{{item.itemName}}</div>
              </div>

              <div class="flex">
              <button @click="decrementItemQuantityInCart(item)">
              <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
              </button>

            <span class="block mx-2 text-center w-8 border" type="text">{{item.itemQty}}</span>
            <button @click="incrementItemQuantityInCart(item)">
              <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
            </button>
              </div>
            </div>
          <div class="flex w-1/4 flex-col justify-between">
              <button @click="removeFromCart(item)" class="font-semibold  text-xs custom-red-color self-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              </button>
              <span class="text-center font-semibold text-sm">${{item.itemTotalPrice}}</span>
          </div>
        </div>
        </div>
        <div class="pt-4"><span class="font-bold">Total: </span> ${{this.$store.getters.totalCartPrice}}</div>
    </div>
</template>

<script>
export default {
    name:'CartDetails',
  computed: {
        cart() {
            return this.$store.getters.cart
        },
    },
    props: {
      items: {
        required: true
      }
    },
    methods: {
    decrementItemQuantityInCart(item) {
      this.$store.commit('decrementItemQuantity',item)
    },
    incrementItemQuantityInCart(item) {
      this.$store.commit('incrementItemQuantity',item)
    },
    removeFromCart(item) {
      this.$store.commit('removeItem',item)
    }
    },
}
</script>
