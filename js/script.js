console.log('Vue email');

const { createApp } = Vue;

createApp({
    data() {
        return {
            emailList: [],
        }
    },
    methods: {

        fetchEmail() {

            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {

                    const email = res.data.response;

                    this.emailList.push(email);

                    console.log(this.emailList);
                    console.log(res.data);
                })
        },
        fetchEmails(numeroEmail) {
            for (let i = 0; i < numeroEmail; i++) {
                this.fetchEmail();
            }
        }

    },
    created() {
        this.fetchEmails(10);
    },
}).mount('#app')



// axios
//     .get('https://flynn.boolean.careers/exercises/api/random/mail')
//     .then((res) => {

//         const email = res.data.response;

//         this.emailList.push(email);

//         console.log(this.emailList);
//         console.log(res.data);
//     })
