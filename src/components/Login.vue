<template>
    <div>
        <input type="text" v-model="loginForm.username" placeholder="Enter user name"> <br><br>
        <input type="password" v-model="loginForm.password" placeholder="Enter password"> <br><br>
        <button v-on:click="getLogin">Login</button>
    </div>
</template>



<script>
    export default{
        // name given here is used to export this page(compnent) to somewhere else. 
        //use this convention to satisfy Eslint
        name:'LoginForm', 

        data(){
            return {
                loginForm:{
                    username:null,
                    password:null,
                }
            }
        },
            
        methods:{
            getLogin(){
                // just printing this msg in the console
                console.log("getLogin called", this.loginForm.username, this.loginForm.password)
            }
        }
    }
</script>