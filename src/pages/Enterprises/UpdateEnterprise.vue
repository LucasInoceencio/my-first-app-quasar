<template>
  <div>
    <q-input filled v-model="EnterpriseParam.id_enterprise" label="Código" readonly />
    <q-input filled v-model="EnterpriseParam.company_name" label="Razão Social" />
    <q-input filled v-model="EnterpriseParam.trading_name" label="Nome Fantasia" />
    <q-input filled v-model="EnterpriseParam.cnpj" label="CNPJ" />
    <q-input filled v-model="EnterpriseParam.opening_date" type="date" label="Data de Abertura" />
    <br/>
    <q-btn color="primary" label="Salvar" @click="editEnterprise"/>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "EditEnterprise",
    data() {
      return {
      }
    },
    props: {
      EnterpriseParam: {
        type: Object,
        required: true
      }
    },
    methods: {
      editEnterprise() {
        axios.put('http://localhost/enterprise/EnterpriseWS/Update.php', this.EnterpriseParam).then(response => {
          this.$q.notify(response.data.Message);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
