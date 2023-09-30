const app = Vue.createApp({
  data() {
    return {
      counter: 2,
      name: "test",
      confirmedName: ""
    };
  },
  methods: {
    // add() {
    //   this.counter = this.counter + 1;
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    // reduce() {
    //   this.counter -=1;
    // }
    reduce(num) {
      this.counter -= num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm(){
      alert("adsfa")
    },
    confirmedInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
