import Vue from 'vue'

Vue.config.productionTip = false


new Vue({
    el: '#vue-app',

    data: {
        cep: '',
        endereco: {}
    },

    methods: {
        search: function() {
            var self = this;
            if (/^[0-9]{5}-[0-9]{3}$/.test(this.cep)) {
                jQuery.getJSON('http://viacep.com.br/ws/' + this.cep + '/json/', function(endereco) {

                    if (endereco.erro) {
                        window.console.warn("Endereco nao localizado!");
                    }

                    self.endereco = endereco;

                });
            }

        }
    }

})