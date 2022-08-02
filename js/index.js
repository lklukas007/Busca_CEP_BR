new Vue({
    el: "#appCep",
    data: {
        endereco: {
            cep: null,
            logradouro: null,
            bairro: null,
            cidade:  null,
            estado: null,
            ibge: null,
            ddd: null
        }
    },
    methods: {
        cepAlteradoEvento() {
            axios({
                method: "get",
                url: `https://viacep.com.br/ws/${this.endereco.cep}/json/`,
                responseType: "aplicattion/json"
            }).then(response => {
                var bean = response.data;
                this.endereco.logradouro = bean.logradouro;
                this.endereco.bairro = bean.bairro;
                this.endereco.estado = bean.estado;
                this.endereco.cidade = bean.localidade;
                this.endereco.ibge = bean.ibge;
                this.endereco.ddd = bean.ddd;
            });
        }
    }
});