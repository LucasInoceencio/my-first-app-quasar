<template>
  <div>
    <q-input filled v-model="Enterprise.company_name" label="Razão Social" />
    <q-input filled v-model="Enterprise.trading_name" label="Nome Fantasia" />
    <q-input filled v-model="Enterprise.cnpj" label="CNPJ" />
    <q-input filled v-model="Enterprise.opening_date" type="date" label="Data de Abertura" />
    <br/>
    <q-btn color="primary" label="Cadastrar" @click="registerEnterprise"/>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "RegisterEnterprise",
    data() {
      return {
        Enterprise: {
          company_name: '',
          trading_name: '',
          cnpj: '',
          opening_date: ''
        }
      }
    },
    methods: {
      registerEnterprise() {
        axios.post('http://localhost/enterprise/EnterpriseWS/Create.php', this.Enterprise).then(response => {
          this.$q.notify(response.data.Message);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  input {
    padding: 20px;
  }
</style>
