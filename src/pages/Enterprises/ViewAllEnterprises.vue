<template>
  <div class="q-pa-md">
    <q-table v-if="editedEnterprise==null"
      :dense="$q.screen.lt.md"
      title="Empresas"
      :data="data"
      :columns="columns"
      row-key="name">
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
          <q-th auto-width>

          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
          <q-td auto-width>
            <q-btn icon="fas fa-edit" @click="Edit(props.row)"></q-btn>
            <q-btn icon="fas fa-trash" @click="Delete(props.row.id_enterprise)"></q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <EditEnterprise v-if="editedEnterprise!=null" :EnterpriseParam="editedEnterprise"></EditEnterprise>
  </div>
</template>

<script>
  import axios from 'axios';
  import EditEnterprise from './UpdateEnterprise';

  export default {
    name: "ViewAllEnterprises",
    components: {EditEnterprise},
    data () {
      return {
        columns: [
          {
            name: 'idEnterprise',
            required: true,
            label: 'Código',
            align: 'left',
            field: 'id_enterprise',
            sortable: true
          },
          { name: 'companyName', align: 'center', label: 'Razão Social', field: 'company_name', sortable: true },
          { name: 'tradingName', align: 'center', label: 'Nome Fantasia', field: 'trading_name', sortable: true },
          { name: 'cnpj', align: 'center', label: 'CNPJ', field: 'cnpj', sortable: true },
          { name: 'openingDate', align: 'center', label: 'Data de Abertura', field: 'opening_date', sortable: true }
        ],
        data: [],
        editedEnterprise:null
      }
    },
    mounted() {
      this.Consult();
    },
    methods: {
      Delete(idEnterprise) {
        let enterpriseAux = {
          id_enterprise: idEnterprise
        };
        axios.delete('http://localhost/enterprise/EnterpriseWS/Delete.php', {data: enterpriseAux}).then(response => {
          this.$q.notify(response.data.Message);
          this.Consult();
        })
      },
      Consult() {
        axios.get('http://localhost/enterprise/EnterpriseWS/Retrieve.php').then((response) => {
          this.data = response.data;
          console.log(this.data);
        });
      },
      Edit(enterprise) {
        this.editedEnterprise = enterprise;
      }
    }
  }
</script>

<style lang="scss" scoped>
  input {
    padding: 20px;
  }
</style>
