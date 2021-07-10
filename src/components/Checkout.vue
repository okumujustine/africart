<template>
<div>
    <transition name="slide" mode="out-in">
  <div class="main-modal-checkout vlight-blue-bg checkoutin">
    <div class="px-28 py-4">
      <button @click="continueShoping" class="px-4 flex flex-row items-between justify-center deep-blue-color">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <div class="pl-2">continue shoping</div>
      </button>
    </div>
    <div class="flex flex-row px-28">
      <div class="w-8/12">
      <div class="bg-white w-10/12 px-4 py-6">
        <h5 class="py-4 font-semibold text-xl">Billing</h5>
        <div>
          <div class="flex flex-col mb-3">
            <label class="py-1">Name</label>
            <input type="text" class="border px-3 py-2 focus:outline-none" placeholder="Enter name ..." />
          </div>
          <div class="flex flex-col mb-3">
            <label class="py-1">Email</label>
            <input type="email" class="border px-3 py-2 focus:outline-none" placeholder="Enter email ..." />
          </div>
          <div class="flex flex-col mb-3">
            <label class="py-1">Address</label>
            <input type="text" class="border px-3 py-2 focus:outline-none" placeholder="Enter address ..." />
          </div>
           <button class="block continue-to-checkout-btn text-center" @click="continueToPayment">Continue to Payment</button>
        </div>
      </div>
      </div>
      <div class="w-4/12 px-10 py-6 mt-4 h-full shadow-sm bg-white">
       <h5 class="text-lg font-semibold mb-3">Edit your cart</h5>
        <CartDetails v-bind:items="cart"/>
      </div>
    </div>

  </div>
  </transition>
</div>
</template>

<script>
import CartDetails from "./CartDetails.vue"

export default {
  name: 'Checkout',
  props: {
    msg: String
  },
    computed: {
        cart() {
            return this.$store.getters.cart
        },
    },
  components: {
    CartDetails,
  },
  methods: {
    continueShoping() {
      this.$router.push({ path: '/' })
      this.$store.commit('closeModal')
    },
    continueToPayment(){
      console.log('total money', this.$store.getters.totalCartPrice)
    }
  },
}
</script>


<style scoped>

</style>
