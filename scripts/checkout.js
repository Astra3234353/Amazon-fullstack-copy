import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/backtend-practice.js'

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/

async function loadPage() {
  try {
    // throw 'error1';
    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      loadCart(() => {
        // reject('error3');
        resolve('value 3');
      });
    });

  } catch (error) {
    console.log('Unexpected error. Please try again later.')
  }

  renderOrderSummary();
  renderPaymentSummary();
};

loadPage()

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  }); 

}).then(() => {
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  })
});
*/