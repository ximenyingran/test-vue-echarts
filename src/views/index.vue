<style lang='scss' scoped>
    
</style>

<template>
    <div id="index">
        <header-com></header-com>
        <div class="content">
            <transition mode="out-in">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    mounted () {
        
    },
    methods: {
        
    }
}
</script>