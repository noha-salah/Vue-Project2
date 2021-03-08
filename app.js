const app = Vue.createApp({

    data() {
        return {
            url:'#',
            fontSize: 40,
            status:true,
            books:[
                {title:' first books',author:'noha',img:'assets/1.png',isfav:true},
                {title:' second books',author:'salah',img:'assets/2.png',isfav:true},
                {title:' third books',author:'hanan',img:'assets/3.png',isfav:true},

            ],
          titleq:'noha',
          bookq:'php',
          ageq:45
        }
      },
      methods:{
toggle(){

    this.status=!this.status
},
change(title){
    this.bookq=title
}
      },
      computed:{
          filterbook(){
              return this.books.filter((book) => book.isfav)
          }
      }
})

 app.mount('#app')
  