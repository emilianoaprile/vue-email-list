console.log('Vue email')

const { createApp } = Vue;

createApp({
    data() {
        return {
            emailList: []
        }
    },
    methods: {

    },
}).mount('#app')


axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then((res) => {
        console.log(res.data)
    })
