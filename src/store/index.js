
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        modal: false,
        cartItems: []
    },
    getters: {
        modalState(state) {
            return state.modal
        },
        cart(state) {
            return state.cartItems
        },
        totalCartPrice(state) {
            const cartArray = state.cartItems
            const total = parseFloat(cartArray.reduce((a, c) => a + parseFloat(c.itemPrice) * c.itemQty, 0)).toFixed(2)
            return total
        }
    },
    mutations: {
        openModal(state) {
            state.modal = true
        },
        closeModal(state) {
            state.modal = false
        },
        toggleModal(state) {
            state.modal = !state.modal
        },
        addItemToCart(state, itemToAdd) {
            state.cartItems.push(itemToAdd)
        },
        incrementItemQuantity(state, newProduct) {

            state.cartItems.forEach((item) => {
                if (item.itemId === newProduct.itemId) {
                    item.itemQty = parseInt(item.itemQty, 10) + 1;

                    item.itemTotalPrice = parseFloat(parseFloat(newProduct.itemPrice) * item.itemQty).toFixed(2);
                }
            });
        },
        decrementItemQuantity(state, newProduct) {
            let allCartItems = state.cartItems

            if (parseInt(newProduct.itemQty) === 1) {

                for (var n = 0; n < allCartItems.length; n++) {
                    if (allCartItems[n].itemId == newProduct.itemId) {
                        allCartItems.splice(n, 1);
                        break;
                    }
                }
            }

            allCartItems.forEach((item) => {

                if (item.itemId === newProduct.itemId) {

                    item.itemQty = parseInt(newProduct.itemQty, 10) - 1;

                    item.itemTotalPrice = parseFloat(parseFloat(newProduct.itemPrice) * item.itemQty).toFixed(2);
                }
            });
        },
        removeItem(state, item) {
            let allCartItems = state.cartItems

            for (var n = 0; n < allCartItems.length; n++) {
                if (allCartItems[n].itemId == item.itemId) {
                    allCartItems.splice(n, 1);
                    break;
                }
            }
        }
    }
})

export default store