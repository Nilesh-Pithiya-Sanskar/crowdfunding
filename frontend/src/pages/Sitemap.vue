<template>
  <div class="example">
    <div class="demo">
      <google-pay-button
        environment="TEST"
        v-bind:button-type="buttonType"
        v-bind:button-color="buttonColor"
        v-bind:existing-payment-method-required="existingPaymentMethodRequired"
        v-bind:paymentRequest.prop="{
          apiVersion: paymentRequest.apiVersion,
          apiVersionMinor: paymentRequest.apiVersionMinor,
          allowedPaymentMethods: paymentRequest.allowedPaymentMethods,
          merchantInfo: paymentRequest.merchantInfo,
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: amount,
            currencyCode: 'INR',
          },
          callbackIntents: ['PAYMENT_AUTHORIZATION'],
        }"
        v-on:loadpaymentdata="onLoadPaymentData"
        v-on:error="onError"
        v-bind:onPaymentAuthorized.prop="onPaymentDataAuthorized"
      ></google-pay-button>
    </div>
  </div>
</template>

<script>
import "@google-pay/button-element";
export default {
  name: "GooglePay",
  props: {},
  data: () => ({
    amount: "10.00",
    existingPaymentMethodRequired: true,
    buttonColor: "default",
    buttonType: "buy",
    paymentRequest: {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: "CARD",
          parameters: {
            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
            allowedCardNetworks: ["MASTERCARD", "VISA"],
          },
          tokenizationSpecification: {
            type: "PAYMENT_GATEWAY",
            parameters: {
              gateway: "example",
              gatewayMerchantId: "BCR2DN4T4SE6LFDF",
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: "12345678901234567890",
        merchantName: "Demo Merchant",
      },
    },
  }),
  methods: {
    onLoadPaymentData: (event) => {
      console.log("load payment data", event.detail);
    },
    onError: (event) => {
      console.error("error", event.error);
    },
    onPaymentDataAuthorized: (paymentData) => {
      console.log("payment authorized", paymentData);
      return {
        transactionState: "SUCCESS",
      };
    },
  },

};
</script>


<style scoped>
.example {
  margin: 5px;
  display: flex;
  flex-direction: row;
}

.example > .demo {
  flex: 1 0 0;
}
.example > .demo > * {
  margin: 1px;
}
</style>



<!-- <template>
  <div class="example">
    <div class="demo">
      <google-pay-button
        environment="TEST"
        :button-type="buttonType"
        :button-color="buttonColor"
        :existing-payment-method-required="existingPaymentMethodRequired"
        :payment-request="paymentRequest"
        @loadpaymentdata="onLoadPaymentData"
        @error="onError"
        :on-payment-authorized="onPaymentDataAuthorized"
      ></google-pay-button>
    </div>
  </div>
</template>

<script>
import { createApp } from 'vue';
import "@google-pay/button-element";

export default {
  name: "GooglePay",
  data() {
    return {
      amount: "10.00",
      existingPaymentMethodRequired: true,
      buttonColor: "default",
      buttonType: "buy",
      paymentRequest: {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
              allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
              allowedCardNetworks: ["MASTERCARD", "VISA"],
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example",
                gatewayMerchantId: "BCR2DN4T4SE6LFDF",
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: "12345678901234567890",
          merchantName: "Demo Merchant",
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: this.amount,
          currencyCode: 'INR',
        },
        callbackIntents: ['PAYMENT_AUTHORIZATION'],
      },
    };
  },
  methods: {
    onLoadPaymentData(event) {
      console.log("load payment data", event.detail);
    },
    onError(event) {
      console.error("error", event.error);
    },
    onPaymentDataAuthorized(paymentData) {
      console.log("payment authorized", paymentData);
      return {
        transactionState: "SUCCESS",
      };
    },
  },
};
</script>

<style scoped>
.example {
  margin: 5px;
  display: flex;
  flex-direction: row;
}

.example > .demo {
  flex: 1 0 0;
}
.example > .demo > * {
  margin: 1px;
}
</style> -->



<!-- <template>
  <div class="example">
    <div class="demo">
      <google-pay-button
        environment="TEST"
        :button-type="buttonType"
        :button-color="buttonColor"
        :existing-payment-method-required="existingPaymentMethodRequired"
        :payment-request="paymentRequest"
        @loadpaymentdata="onLoadPaymentData"
        @error="onError"
        :on-payment-authorized="onPaymentDataAuthorized"
      ></google-pay-button>
    </div>
  </div>
</template>

<script>
import { createApp } from 'vue';
import "@google-pay/button-element";

export default {
  name: "GooglePay",
  data() {
    return {
      amount: "10.00",
      existingPaymentMethodRequired: true,
      buttonColor: "default",
      buttonType: "buy",
      paymentRequest: null,
    };
  },
  mounted() {
    this.initializePaymentRequest();
  },
  methods: {
    initializePaymentRequest() {
      this.paymentRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
              allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
              allowedCardNetworks: ["MASTERCARD", "VISA"],
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example",
                gatewayMerchantId: "BCR2DN4T4SE6LFDF",
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: "12345678901234567890",
          merchantName: "Demo Merchant",
        },
      };
    },
    onLoadPaymentData(event) {
      console.log("load payment data", event.detail);
    },
    onError(event) {
      console.error("error", event.error);
    },
    onPaymentDataAuthorized(paymentData) {
      console.log("payment authorized", paymentData);
      return {
        transactionState: "SUCCESS",
      };
    },
  },
};
</script>

<style scoped>
.example {
  margin: 5px;
  display: flex;
  flex-direction: row;
}

.example > .demo {
  flex: 1 0 0;
}
.example > .demo > * {
  margin: 1px;
}
</style> -->
