<style>
.map {
    width: 100%;
    height: 400px;
}
</style>

<template>
<div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <el-select v-model="city" placeholder="正在定位...">
        <el-option v-for="(item, index) in citys" :key="index" :label="item.name" :value="item.value"></el-option>
    </el-select>


</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    data() {
        return {
            LocationCity: '正在定位',
            success: false,
            citys: [
              {name: '柳州市', value: 1},
              {name: '桂林市', value: 2},
              {name: '南宁市', value: 3}
            ],
            aaa: null,
            city: null
        }
    },
    // components: {
    //     HelloWorld
    // },
    watch: {
      city (val) {
        console.log('val :', val);
      }
    },
    mounted() {
        this.getCurrentCity()
    },
    methods: {
        getCurrentCity() {
            let myCity = new BMap.LocalCity()
            myCity.get( (response) => {
                console.log('response :', response);
                this.city = response.name
            })
        }
        // getCurrentCity() {
        //     return new Promise(function (resolve, reject) {
        //         let myCity = new BMap.LocalCity()
        //         myCity.get(function (result) {
        //             console.log('result :', result);
        //             resolve(result.name)
        //         })
        //     }).then ((city) => {
        //         this.city = city
        //     })
        // }
    }
}
</script>
