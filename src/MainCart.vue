<template>
<div>
    <transition name="slide" mode="out-in">
        <div v-if="modalOpened" class="africart-ac-main-modal">
            <div class="africart-ac-main-modal-container">
            <div class="africart-ac-main-modal-left-section" @click="onClose"></div>
            <!-- cart-in-animation -->
            <div class="africart-ac-main-modal-right-section">
                <div class="vlight-blue-bg  mb-2 px-10 py-5">
                <div class="flex flex-row items-center justify-between pb-2">
                <h2 class="text-semibold text-xl">Your Cart</h2>
                <button @click="onClose" class="font-semibold custom-red-color text-sm self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </button>
                </div>
                </div>

                <div class="px-10">
                <div class="flex flex-row items-center deep-blue-color py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h2 class="font-semibold pl-2">{{cart.length}}</h2>
                </div>

                <CartDetails :items="cart"/>

                <router-link to="/checkout" class="block continue-to-checkout-btn text-center">Continue to Checkout</router-link>
                </div>
            </div>

            </div>
        </div>
    </transition>
</div>
</template>

<script>

import CartDetails from './components/CartDetails.vue';

export default {
  name: 'App',
  components: {
      CartDetails,
  },
  methods: {
    onClose() {
      this.$store.commit('closeModal')
    },
  },
  computed: {
        modalOpened(){
            return this.$store.getters.modalState;
        },
        cart() {
            return this.$store.getters.cart
        },
    }
}
</script>

<style language="css" scope>
</style>
